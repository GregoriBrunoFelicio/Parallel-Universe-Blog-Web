import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router  } from '@angular/router';
import { AuthenticationService } from '../shared/auth/authentication.service';
import { Login } from '../shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login() {
    if (this.loginForm.invalid) return;
    const login = this.loginForm.value as Login;
    this.authenticationService.login(login).subscribe(() => {
      this.router.navigate(['home']);
    }, error => {
        console.log(error.error);
    });
  }
}
