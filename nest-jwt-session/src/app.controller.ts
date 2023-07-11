import {
  Controller,
  Get,
  Headers,
  Inject,
  Res,
  Session,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('session')
  session(@Session() session) {
    console.log(session);
    session.count = session.count ? session.count + 1 : 1;

    return session.counts;
  }

  @Get('token')
  token(
    @Headers('authorization') authorization: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (authorization) {
      try {
        const token = authorization.split(' ')[1];
        const data = this.jwtService.verify(token); // 验证

        const newToken = this.jwtService.sign({
          count: data.count + 1,
        });
        response.setHeader('authorization', 'bearer ' + newToken);
        return data.count + 1;
      } catch (e) {
        console.log(e);
        throw new UnauthorizedException(); // 验证失败抛出UnauthorizationException异常，让nest内置的Exception Filter处理
      }
    } else {
      const newToken = this.jwtService.sign({
        count: 1,
      });

      response.setHeader('authorization', 'bearer ' + newToken);
      return 1;
    }
  }
}
