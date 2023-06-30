import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class CustomLogger extends ConsoleLogger {
  log(message, context) {
    console.log(`[${context}]`, message);
    console.log('-------CustomLogger-------');
  }
}
