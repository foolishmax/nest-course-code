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
  private reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('guard');
    console.log(
      'getHandler',
      this.reflector.get('roles', context.getHandler()),
    );
    console.log('getClass', this.reflector.get('roles', context.getClass()));
    console.log(
      'getAll',
      this.reflector.getAll('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    console.log(
      'getAllAndMerge',
      this.reflector.getAllAndMerge('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    console.log(
      'getAllAndOverride',
      this.reflector.getAllAndOverride('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    return true;
  }
}
