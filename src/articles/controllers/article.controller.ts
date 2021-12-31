import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards, UsePipes } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateArticleDto } from "../dto/createArticleDto";
import { Article } from "../schemas/article.schema";
import { ArticleService } from "../services/article.service";
import { ArticleValidationPipe } from "../validation/article.validation";

@Controller('articles')
export class ArticleController {
    constructor(
        private articleService: ArticleService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @UsePipes(new ArticleValidationPipe())
    @Post('create-article')
    async createArticle(
        @Req() req, 
        @Body() createArticleDto: CreateArticleDto
    ): Promise<Article> {
        try {
            createArticleDto.authorId = req.user._id.toString();
            return this.articleService.createArticle(createArticleDto);
        } catch (error) {
            throw new HttpException("create article failed", HttpStatus.BAD_REQUEST);
        }
    }
}