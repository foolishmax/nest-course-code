import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('foo')
  getFoo() {
    console.log('foo');
    return this.appService.getHello();
  }

  @Get('foo2')
  getFoo2() {
    console.log('foo2');
    return this.appService.getHello();
  }
}
