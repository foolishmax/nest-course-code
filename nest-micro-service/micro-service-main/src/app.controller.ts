import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Inject('USER_SERVICE')
  private userClient: ClientProxy;

  @Get('sum')
  calc(@Query('num') str): Observable<number> {
    const numArr = str.split(',').map((item) => parseInt(item));

    /**
     * @MessagePattern 声明方法则使用send调用
     * @EventPattern 声明方法则使用emit调用
     */

    this.userClient.emit('log', '求和');

    return this.userClient.send<number>('sum', numArr);
  }
}
