import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  Observable,
  TimeoutError,
  catchError,
  throwError,
  timeout,
} from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(private appService: AppService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('appService', this.appService.getHello());
    return next.handle().pipe(
      timeout(3000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          console.log(err);
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err);
      }),
    );
  }
}
