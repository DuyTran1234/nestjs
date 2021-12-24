import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [],
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
