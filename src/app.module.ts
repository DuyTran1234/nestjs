import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
const dotenv = require('dotenv');
dotenv.config();
@Module({
  imports: [
    ArticlesModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
  controllers: [AppController],
})
export class AppModule {
  // configure middleware function
  // configure(consumer: MiddlewareConsumer) {
  //     consumer.
  //     apply(LoggerMiddleware).
  //     forRoutes({
  //       path: 'cats',
  //       method: RequestMethod.ALL,
  //     });
  // }
}
