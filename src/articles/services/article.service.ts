import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateArticleDto } from "../dto/createArticleDto";
import { Article, ArticleDocument } from "../schemas/article.schema";

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article.name) private articleModel: Model<ArticleDocument>
    ) {}
    async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
        try {
            const rs = await new this.articleModel(createArticleDto).save();
            return rs;
        } catch (error) {
            throw new HttpException('create article failed (service)', HttpStatus.BAD_REQUEST);
        }
    }
}