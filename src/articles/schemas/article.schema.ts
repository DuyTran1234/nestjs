import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { articleRegex } from "../regex/article.regex";

export type ArticleDocument = Article & Document

@Schema({
    timestamps: true,
})
export class Article {
    @Prop({
        required: true,
    })
    authorId: string;

    @Prop({
        required: true,
        validate: articleRegex.scopeArticleRegex,
    })
    scopeArticle: string;

    @Prop({
        required: true,
    })
    content: string;
}
export const ArticleSchema = SchemaFactory.createForClass(Article);