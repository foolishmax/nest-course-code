import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'dto/user.dto';
import { AppService } from './app.service';
import { FooPipe } from './foo.pipe';

enum IEnum {
  AAA = '111',
  BBB = '222',
  CCC = '333',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  createUser(@Body(new ValidationPipe()) user: User) {
    console.log(user);
    return user;
  }

  // 自定义foo
  @Get('foo/:foo')
  customPipe(
    @Query('aaa', FooPipe) aaa: string,
    @Param('foo', FooPipe) foo: number,
  ) {
    return aaa + foo;
  }

  @Get('dft')
  defaultValuePipie(
    @Query('value', new DefaultValuePipe('default-value')) value: string,
  ) {
    return value;
  }

  @Get('uuid/:uuid')
  parseUUIDPipe(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return uuid;
  }

  @Get('enum/:enum')
  parseEnumPipe(@Param('enum', new ParseEnumPipe(IEnum)) e: IEnum) {
    // 当然也可以使用errorHttpStatusCode和exceptionFactor来定制
    return e;
  }

  @Get('array')
  parseArrayPipe(
    @Query(
      'array',
      new ParseArrayPipe({
        items: Number,
        // separator: '..' // 指定分隔符
        // optional: true // 可选
      }),
    )
    array: Array<number>,
  ) {
    return array.reduce((total, item) => total + item, 0);
  }

  @Get('boolean')
  parseBoolPipe(@Query('bool', ParseBoolPipe) bool: boolean) {
    return typeof bool;
  }

  @Get('float')
  parseFloatPipe(@Query('age', ParseIntPipe) age: number) {
    return age + 1;
  }

  @Get()
  getHello3(
    @Query(
      'age',
      new ParseIntPipe({
        // 自定义抛出异常
        exceptionFactory: (message) => {
          console.log(message);
          throw new HttpException(
            'error' + message,
            HttpStatus.NOT_IMPLEMENTED,
          );
        },
      }),
    )
    age: string,
  ): string {
    return age + '1';
  }

  @Get()
  getHello2(
    @Query(
      'age',
      new ParseIntPipe({
        // 指定错误状态吗
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
      }),
    )
    age: number,
  ): string {
    return this.appService.getHello() + ' ' + age;
  }

  @Get()
  getHello1(@Query('age', ParseIntPipe) age: number): string {
    return this.appService.getHello() + ' ' + age;
  }
}
