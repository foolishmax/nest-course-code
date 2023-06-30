import { Controller, SetMetadata, applyDecorators } from '@nestjs/common';

// 类装饰器
// export const Class = () => Controller('class');

export const Class = (path, metadata) => {
  return applyDecorators(Controller(path), SetMetadata('name', metadata));
};
