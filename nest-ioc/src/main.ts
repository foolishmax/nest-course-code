import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // nest从AppModule开始解析class上通过装饰器声明的依赖信息，自动创建和组装对象
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
