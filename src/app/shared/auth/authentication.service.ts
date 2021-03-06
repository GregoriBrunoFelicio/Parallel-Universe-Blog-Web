import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
import { User } from '../models/user';
import { ServiceBase } from '../service.base';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends ServiceBase {
  private currentUserSubject: BehaviorSubject<User>;
  currentUser$: Observable<User>;

  constructor(http: HttpClient, private route: Router) {
    super(http);
  }

  login(login: Login) {
    return this.http.post(`${this.url}/Account/Login`, login).pipe(
      map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['login']);
  }

  isAuthenticated() {
    const token = this.getToken();
    if (token) {
      const jwtHelper = new JwtHelperService();
      return !jwtHelper.isTokenExpired(token);
    }
  }

  getToken() {
    const token = localStorage.getItem('user');
    return token ? JSON.parse(token)['token'] : '';
  }

  getUser() {
    const token = localStorage.getItem('user');
    return token ? JSON.parse(token)['user'] : '';
  }
}
