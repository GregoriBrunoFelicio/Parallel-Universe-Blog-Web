import { HttpClient } from "@angular/common/http";
import { stringify } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { tap } from 'rxjs/operators';
import { Login } from "../models/login";
import { ServiceBase } from "../service.base";

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService extends ServiceBase {

    constructor(http: HttpClient) {
        super(http);
    }

    login(login: Login) {
        return this.http.post(`${this.url}/Account/Login`, login)
            .pipe(tap(user => {
                localStorage.setItem('user', JSON.stringify(user))
            }));
    }

    logout() {
        localStorage.removeItem('user');
    }

    isAuthenticated() {
        const token = this.getToken();
        if (token) {
            const jwtHelper = new JwtHelperService();
            return !jwtHelper.isTokenExpired(token);
        }
    }

    private getToken() {
        const token = localStorage.getItem('user');
        return token ? JSON.parse(token)['token'] : ''
    }
}

