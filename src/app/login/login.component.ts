import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/auth/authentication.service';
import { Login } from '../shared/models/login';
import { Result } from '../shared/result';
import { ToastService } from '../shared/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) return;
    const login = this.loginForm.value as Login;
    this.authenticationService.login(login).subscribe(
      () => {
        this.router.navigate(['admin']);
      },
      (error) => {
        const result = error.error as Result;
        this.toastService.showErrorMessage(result.message);
      }
    );
  }
}
