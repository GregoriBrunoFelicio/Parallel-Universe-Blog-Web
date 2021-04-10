import { Component, OnInit } from '@angular/core';
import { Login } from './shared/models/login';
import { AuthenticationService } from './shared/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private accountService: AuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    const login = { email: 'email1@email.com', password: 'string' } as Login;
    this.accountService.login(login).subscribe();
  }

  logout() {
    this.accountService.logout();
  }
}

export class LoginResult {
  success: boolean;
  token: string;
  message: string;
}