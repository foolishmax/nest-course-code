import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller 代表这个class可以被注入，nest会把它放到IOC容器中
@Controller()
export class AppController {
  // 这里只是声明了对AppService的依赖，就可以调用他的方法
  // nest在背后自动做了对象创建和依赖注入的工作
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
