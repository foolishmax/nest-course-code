import { Controller, Get, Inject } from '@nestjs/common';
import { Lib1Service } from 'libs/lib1/src';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(Lib1Service)
  private lib: Lib1Service;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  aaa() {
    return 'aaa' + this.lib.xxx();
  }
}
