import {  HttpException, Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Request } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements NestInterceptor {
    constructor() { }
    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        return next.handle().pipe(
            catchError((err) => {
                const request: Request = context.switchToHttp().getRequest();

                return throwError(
                    () =>
                        new HttpException(
                            {
                                message: err?.message || err?.detail || 'Something went wrong',
                                timestamp: new Date().toISOString(),
                                route: request.path,
                                method: request.method
                            },
                            err.statusCode || 500
                        )
                );
            })
        );
    }
}
