import { Injectable } from '@nestjs/common';

// provider一般都是用@Injectable修饰的class
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
