import { Component, OnInit } from '@angular/core';
import { Login } from './shared/models/login';
import { AuthenticationService } from './shared/auth/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
}
