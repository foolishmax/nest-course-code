import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Injectable()
export class FooMiddleware implements NestMiddleware {
  // 可以通过@Inject注入AppService到middleware中
  @Inject(AppService)
  private readonly appService: AppService;

  use(req: Request, res: Response, next: () => void) {
    console.log('before');
    console.log('---', this.appService.getHello());
    next(); // 调用下一个middleware
    console.log('after');
  }
}
