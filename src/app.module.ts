import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersModule } from './users/users.module';
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.DATABASE_URL);
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
  controllers: [],
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
