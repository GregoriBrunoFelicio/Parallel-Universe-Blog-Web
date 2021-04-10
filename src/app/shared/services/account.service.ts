import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AccountService {

    constructor(private http: HttpClient) {

    }

    login(login: Login) {
        return this.http.post('https://localhost:5001/Account/Login', login)
            .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user))
            }));
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export interface Login {
    email: string;
    password: string;
}