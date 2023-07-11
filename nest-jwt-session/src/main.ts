import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'foolishmax', // 指定加密的密钥
      resave: false, // 为true每次访问都会更新session，不管有没有修改session内容，而false只有session内容变了才更新
      saveUninitialized: false, // 初始化一个空的session对象
    }),
  );

  await app.listen(3000);
}
bootstrap();
