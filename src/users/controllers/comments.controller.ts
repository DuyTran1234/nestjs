import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCommentDto } from "../dto/createCommentDto";
import { Comment } from "../schemas/comment.schema";
import { CommentsService } from "../services/comments.service";

@Controller("comments")
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @Post("create")
    async createComment(@Body() createCommentDto: CreateCommentDto): Promise<string> {
        const create = this.commentsService.createComment(createCommentDto);
        return create;
    }

    @Get("allComment")
    async getAllComment(): Promise<Comment[]> {
        return this.commentsService.getAllComment();
    }
}