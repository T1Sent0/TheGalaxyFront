import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    let newHeaders = req.headers;
    newHeaders = newHeaders.set('Authorization', `Bearer ${localStorage.getItem('userToken')}`);
    return next.handle(req.clone({ headers: newHeaders }));
  }
}