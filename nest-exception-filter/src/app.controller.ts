import { Body, Controller, Get, Post } from '@nestjs/common';
import { AaaDto } from './aaa.dto';
import { AppService } from './app.service';
import { UnLoginException } from './unlogin.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new UnLoginException('xxx,用户未登录');
    // throw new BadGatewayException('xxx');
    // throw new BadRequestException('yyy');
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
  }

  @Post('aaa')
  aaa(@Body() aaaDto: AaaDto) {
    return 'success';
  }
}
