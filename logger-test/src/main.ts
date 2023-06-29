import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { CustomLoggerService } from './CustomLoggerService';
// import { CustomConsoleLoggerService } from './CustomConsoleLoggerService';
import { CustomLogger } from './logger/CustomLogger';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, {
//     // logger: false, // 控制日志打印是否开启
//     // logger: ['warn', 'error'], // 控制输出什么级别的日志
//     // logger: new CustomLoggerService(), // 自定义日志打印
//     // logger: new CustomConsoleLoggerService(), //仅自定义log的日志
//   });
//   await app.listen(3000);
// }
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true, // 先不打印日志放到buffer缓存区，直到useLogger指定了logger并且应用初始化完毕
  });
  app.useLogger(app.get(CustomLogger));
  await app.listen(3000);
}
bootstrap();
