import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// @Module声明模块
@Module({
  imports: [],
  controllers: [AppController], // controllers是控制器，只能被注入
  providers: [AppService], // 可被注入，也可注入别的对象
})
export class AppModule {}
