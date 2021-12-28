import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CommentDocument = Comment & Document 

@Schema({
    timestamps: true,
})
export class Comment {
    @Prop()
    userId: string;

    @Prop()
    content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);