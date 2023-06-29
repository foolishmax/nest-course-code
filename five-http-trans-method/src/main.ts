import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 支持静态资源请求
  // 注意给create方法传入NestExpressApplication的范型才有useStaticAssets这些方法
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' });

  await app.listen(3000);
}
bootstrap();
