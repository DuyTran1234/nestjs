import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCommentDto } from "../dto/createCommentDto";
import { Comment, CommentDocument } from "../schemas/comment.schema";

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    async createComment(createCommentDto: CreateCommentDto): Promise<string> {
        try {
            new this.commentModel(createCommentDto).save();
            return "created comment success";
        }
        catch(error) {
            throw new HttpException('create fail comment', HttpStatus.BAD_REQUEST);
        }
    }

    async getAllComment(): Promise<Comment[]>{
        try {
            return this.commentModel.find().exec();
        } catch (error) {
            throw new HttpException('get all comment failed', HttpStatus.BAD_REQUEST);
        }
    }
}