import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { usersRegex } from "src/users/regex/users.regex";

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})
export class User {

    // @Prop({
    //     auto: true,
    // })
    // _id: ObjectId

    @Prop({
        required: true,
        validate: usersRegex.usernameRegex
    })
    username: string;

    @Prop({
        required: true,
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
    
    @Prop({
        validate: usersRegex.rolesRegex,
    })
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);