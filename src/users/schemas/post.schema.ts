import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostDocument = Post & Document;

@Schema({timestamps: true})
export class Post {
    @Prop()
    content: string;

    @Prop([String])
    comments: string[];
}