import { Get, UseGuards, applyDecorators } from '@nestjs/common';
import { Decorator } from './decorator.decorator';
import { DecoratorGuard } from './decorator.guard';

export function MergeDecorator(path, role) {
  return applyDecorators(Get(path), Decorator(role), UseGuards(DecoratorGuard));
}
