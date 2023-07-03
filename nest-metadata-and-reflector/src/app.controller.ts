import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { FooGuard } from './foo.guard';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(FooGuard)
  // @UseInterceptors(FooInterceptor)
  @SetMetadata('roles', ['admin'])
  getHello(): string {
    return this.appService.getHello();
  }
}
