import {
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Ip,
  Optional,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Session,
  SetMetadata,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FooFilter } from './foo.filter';
import { FooGuard } from './foo.guard';
import { FooInterceptor } from './foo.interceptor';

@Controller()
@SetMetadata('name', 'foo')
export class AppController {
  // @Optional 声明代表注入依赖是可选的
  constructor(@Optional() private readonly appService: AppService) {}

  // 属性注入
  // @Inject(AppService)
  // private readonly appService: AppService;

  @Get()
  @UseFilters(FooFilter)
  @UseGuards(FooGuard)
  @UseInterceptors(FooInterceptor)
  @UsePipes(ParseIntPipe)
  @SetMetadata('roles', ['admin'])
  getHello(): string {
    if (1 + 1 === 2) {
      throw new HttpException('foolishmax: error', HttpStatus.BAD_GATEWAY);
    }
    return this.appService.getHello();
  }

  @Get('/pipe/:id')
  getPipe(
    @Param('id', ParseIntPipe) id: number,
    @Query('bbb', ParseBoolPipe) bbb: boolean,
  ) {
    console.log(typeof id, typeof bbb);
    console.log(id, bbb);
    return 'pipe';
  }

  @Get('/accept')
  getHeaderAccept(@Headers('Accept') accept: string) {
    console.log(accept);
    return accept;
  }

  @Get('/headers')
  getHeaders(@Headers() headers: Record<string, any>) {
    console.log(headers);
    return headers;
  }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip);
    return ip;
  }

  @Get('/session')
  session(@Session() session) {
    console.log(session);
    session.count = 100;
    return session;
  }
}
