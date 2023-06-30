import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 构造期注入
  // nest会自动对它做实例化在注入
  constructor(private readonly appService: AppService) {}

  // 属性注入
  // @Inject(AppService)
  // private readonly appService: AppService;

  // token方式注入,相比用class做token可以省去 @Inject
  // constructor(@Inject('app_service') private readonly appService: AppService) {}

  // provide指定token，useValue指定值的注入方式
  // @Inject('person')
  // private readonly person: { name: string; age: number };

  // 使用useFactory来动态创建对象
  @Inject('dynamic_person')
  private readonly dynamicPerson: { name: string; age: number; desc: string };

  @Get()
  getHello(): string {
    console.log(this.dynamicPerson.name);
    return this.appService.getHello();
  }
}
