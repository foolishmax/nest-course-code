import { Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Class } from './class.decorator';
import { Decorator } from './decorator.decorator';
import { DecoratorGuard } from './decorator.guard';
import { MergeDecorator } from './merge.decorator';
import { Param } from './param.decorator';

@Class('', 'foolishmax-class')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('name', 'foolishmax-method')
  @UseGuards(DecoratorGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('decorator')
  @Decorator('foolishmax')
  @UseGuards(DecoratorGuard)
  getHello2() {
    return this.appService.getHello();
  }

  // 合并装饰器
  @MergeDecorator('merge', 'lbs')
  getHello3() {
    return this.appService.getHello();
  }

  // 自定义参数装饰器
  @Get('param')
  getHello4(@Param() param) {
    return param;
  }
}
