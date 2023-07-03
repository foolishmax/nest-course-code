import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局启用interceptor,此时new实例化就无法注入依赖了
  // app.useGlobalInterceptors(new FooInterceptor());
  await app.listen(3000);
}
bootstrap();
