import { Injectable } from '@nestjs/common';

// @Injectable 代表这个class可注入，那么nest会把它的对象放到IOC容器里
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
