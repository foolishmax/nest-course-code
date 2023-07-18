import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import config from './config';
import config2 from './config2';

@Module({
  imports: [
    // ConfigModule.forRoot(),// 仅有一个.env文件时
    ConfigModule.forRoot({
      isGlobal: true, // 注册为全局就可以在bbb中使用了
      load: [config2, config], // 支持ts文件灵活配置，文件支持异步
    }),
    BbbModule,
    // ConfigModule.forRoot({
    //   envFilePath: [
    //     path.join(process.cwd(), '.other.env'), // 注意：前面的配置会覆盖后面的配置
    //     path.join(process.cwd(), '.env'),
    //   ],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
