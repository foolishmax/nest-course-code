import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooMiddleware } from './foo.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(FooMiddleware).forRoutes('*'); //应用到所有所有之上
    consumer
      .apply(FooMiddleware)
      .forRoutes({ path: 'foo', method: RequestMethod.GET });
    consumer
      .apply(FooMiddleware)
      .forRoutes({ path: 'foo2', method: RequestMethod.GET });
  }
}
