import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  sum(numArray: Array<number>): number {
    return numArray.reduce((total, item) => total + item, 0);
  }

  @EventPattern('log')
  log(str: string) {
    console.log(str);
  }
}
