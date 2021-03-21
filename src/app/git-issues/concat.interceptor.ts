import {
  HttpEvent, HttpHandler,

  HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Issues } from './issues.interface';

@Injectable()
export class concatInterceptor implements HttpInterceptor {
  constructor() {}
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization:
          'Basic ' +
          btoa('garlife' + ':' + 'b35cc448095e92f3b0fff222b3a9b1384d6d6ecf'),
      },
    });
    return next.handle(request);
  }


}
   

