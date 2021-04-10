import { HttpClient } from "@angular/common/http";
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

    isisAuthenticated() {
        const token = JSON.parse(localStorage.getItem('user'))['token'];
        const helper = new JwtHelperService();
        const isExpired = helper.isTokenExpired(token);
        return isExpired;
    }
}

