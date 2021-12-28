import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { usersRegex } from "src/regex/users.regex";

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})
export class User {
    @Prop({
        required: true,
        validate: usersRegex.usernameRegex
    })
    username: string;

    @Prop({
        required: true,
        validate: usersRegex.passwordRegex
    })
    password: string;

    @Prop({
        required: true,
    })
    name: string;

    @Prop()
    avatar: string;

    @Prop({
        validate: usersRegex.emailRegex
    })
    email: string;
    
}

export const UserSchema = SchemaFactory.createForClass(User);