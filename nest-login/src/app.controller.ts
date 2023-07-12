import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 只有登录才能访问的接口,可以加个Guard来限制访问
  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa(): string {
    return 'aaa';
  }
}
