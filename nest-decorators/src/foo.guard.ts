import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class FooGuard implements CanActivate {
  @Inject(Reflector)
  private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const classMetadata = this.reflector.get('name', context.getClass());
    const methodMetadata = this.reflector.get('roles', context.getHandler());

    console.log('classMetadata:', classMetadata);
    console.log('methodMetadata', methodMetadata);
    return true;
  }
}
