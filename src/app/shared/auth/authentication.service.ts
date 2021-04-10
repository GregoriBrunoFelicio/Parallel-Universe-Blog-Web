import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
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

    isLoggedIn() {
        return true;
    }
}

