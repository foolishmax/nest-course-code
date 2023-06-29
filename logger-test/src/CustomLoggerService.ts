import { LoggerService } from '@nestjs/common';

export class CustomLoggerService implements LoggerService {
  log(message: string, context: string) {
    console.log(`---log---[${context}]---`, message);
  }
  error(message: string, context: string) {
    console.log(`---error---[${context}]---`, message);
  }
  warn(message: string, context: string) {
    console.log(`---warn---[${context}]---`, message);
  }

  // debug?(message: any, ...optionalParams: any[]) {
  //   throw new Error('Method not implemented.');
  // }
  // verbose?(message: any, ...optionalParams: any[]) {
  //   throw new Error('Method not implemented.');
  // }
  // setLogLevels?(levels: LogLevel[]) {
  //   throw new Error('Method not implemented.');
  // }
}
