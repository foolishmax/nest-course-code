import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { FooService } from './foo.service';

@Injectable()
export class BarService {
  constructor(
    @Inject(forwardRef(() => FooService)) private fooService: FooService,
  ) {}

  bar() {
    console.log('bar');
    return 'bar';
  }
}
