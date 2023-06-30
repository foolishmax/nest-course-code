import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HostController } from './host.controller';

// @Global() // 注册为全局模块
@Module({
  imports: [],
  controllers: [AppController, HostController],
  providers: [AppService],
})
export class AppModule {}
