import {
  Controller,
  Get,
  Header,
  HostParam,
  HttpCode,
  Next,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// http://127.0.0.1:3000/host
@Controller({ host: ':host.0.0.1', path: 'host' })
export class HostController {
  @Get('/req')
  req(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);

    return req.hostname + '---' + req.url;
  }

  @Get('/res')
  res(@Res() res: Response) {
    // 需手动返回
    res.end('/res');
  }

  @Get('/resWithPassthrough')
  resWithPassthrough(@Res({ passthrough: true }) res: Response) {
    console.log(res);
  }

  @Get('next')
  next(@Next() next: NextFunction) {
    console.log('next1');
    next();
    // return 'next1';
  }

  @Get('next')
  next2() {
    console.log('next2');
    return 'next2';
  }

  @Get()
  hello(@HostParam('host') host) {
    return host;
  }

  @Get('/httpCode')
  @HttpCode(201)
  httpCode() {
    return 'httpCode';
  }

  @Get('header')
  @Header('aaa', 'bbb')
  header() {
    return 'header';
  }

  @Get('redirect')
  @Redirect('http://juejin.cn')
  redirect() {
    return 'redirect';
  }
}
