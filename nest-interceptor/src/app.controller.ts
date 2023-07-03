import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CatchInterceptor } from './catch.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';
// import { MapInterceptor } from './map.interceptor';
// import { TapInterceptor } from './tap.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseInterceptors(TapInterceptor)
  // @UseInterceptors(MapInterceptor)
  @UseInterceptors(CatchInterceptor)
  getHello(): string {
    // throw new Error('xxx');
    return this.appService.getHello();
  }

  @Get('getHello2')
  @UseInterceptors(TimeoutInterceptor)
  async getHello2() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return 'getHello2';
  }
}
