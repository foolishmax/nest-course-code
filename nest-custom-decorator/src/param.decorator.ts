import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// 参数装饰器
export const Param = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    // data：传入的参数
    // ctx：可以取出request、response对象
    return 'param';
  },
);
