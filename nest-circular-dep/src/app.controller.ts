import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FooService } from './foo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fooService: FooService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + this.fooService.foo();
  }
}
