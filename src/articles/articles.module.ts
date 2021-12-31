import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { ArticleController } from "./controllers/article.controller";
import { Article, ArticleSchema } from "./schemas/article.schema";
import { ArticleService } from "./services/article.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Article.name, schema: ArticleSchema },
        ]),
        AuthModule,
    ],
    providers: [
        ArticleService,
    ],
    controllers: [
        ArticleController,
    ],
})
export class ArticlesModule { }