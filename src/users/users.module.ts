import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentsController } from "./controllers/comments.controller";
import { UsersController } from "./controllers/users.controller";
import { Comment, CommentSchema } from "./schemas/comment.schema";
import { User, UserSchema } from "./schemas/user.schema";
import { CommentsService } from "./services/comments.service";
import { UsersService } from "./services/users.service";

@Module({
    imports: [MongooseModule.forFeature([
        {name: User.name, schema: UserSchema},
        {name: Comment.name, schema: CommentSchema},
    ])],
    controllers: [UsersController, CommentsController],
    providers: [UsersService, CommentsService],
    exports: [UsersService],
})

export class UsersModule {}