import { SetMetadata } from '@nestjs/common';

// method装饰器
export const Decorator = (...args: string[]) => SetMetadata('name', args);
