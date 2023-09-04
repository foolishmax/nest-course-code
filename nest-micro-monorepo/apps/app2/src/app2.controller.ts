import { Controller, Get, Inject } from '@nestjs/common';
import { Lib1Service } from 'libs/lib1/src';
import { App2Service } from './app2.service';

@Controller()
export class App2Controller {
  constructor(private readonly app2Service: App2Service) {}

  @Inject(Lib1Service)
  private lib: Lib1Service;

  @Get()
  getHello(): string {
    return this.app2Service.getHello();
  }

  @Get('bbb')
  bbb() {
    return 'bbb' + this.lib.xxx();
  }
}
