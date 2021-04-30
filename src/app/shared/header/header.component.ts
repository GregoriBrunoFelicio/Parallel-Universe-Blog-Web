import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public authenticationService: AuthenticationService) {}

  logout() {
    this.authenticationService.logout();
  }
}
