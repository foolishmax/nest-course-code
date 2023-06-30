import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],

  // 方式一：简写,最常用
  // providers: [AppService],

  // 方式二：指定token和类
  // providers: [
  //   {
  //     provide: AppService, // 指定注入的token
  //     useClass: AppService, // 指定注入对象的类
  //   },
  // ],

  // 方式三：指定字符串token
  // providers: [
  //   {
  //     provide: 'app_service',
  //     useClass: AppService,
  //   },
  // ],

  // 方式四： 除了指定class外，还可以指定一个值，让IOC容器注入
  // providers: [
  //   AppService,
  //   {
  //     provide: 'person',
  //     useValue: {
  //       name: 'aaa',
  //       age: 20,
  //     },
  //   },
  // ],

  // 方式五：使用useFactory来动态创建对象
  providers: [
    AppService,
    {
      provide: 'dynamic_person',
      // 支持穿参，支持异步
      async useFactory(appService: AppService) {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });

        return { name: 'aaa', age: 20, desc: appService.getHello() };
      },
      inject: [AppService],
    },
    {
      provide: 'dynamic_person_alias', // 通过useExisting来指定别名，给dynamic_person起个新的token别名dynamic_person_alias
      useExisting: 'dynamic_person',
    },
  ],
})
export class AppModule {}
