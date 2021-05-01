import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './auth/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authentication: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (this.authentication.isAuthenticated() && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authentication.getToken()}`,
        },
        responseType: 'text',
      });
      return next.handle(request);
    }
  }
}
