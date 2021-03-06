import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthenticationService } from '../shared/auth/authentication.service';
import { ToastService } from '../shared/toast.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const authenticationServiceMock = {
    login: jest.fn(() => of([])),
  };

  const routerMock = {
    navigate: jest.fn(),
  };

  const toastServiceMock = {
    showErrorMessage: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        { provide: AuthenticationService, useValue: authenticationServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ToastService, useValue: toastServiceMock },
      ],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    let createFormSpy;
    beforeEach(() => {
      createFormSpy = jest.spyOn(component, 'createForm');
      component.ngOnInit();
    });

    it('should call method create form', () => {
      expect(createFormSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('login', () => {
    describe('when form is invalid', () => {
      beforeEach(() => {
        component.createForm();
        component.login();
      });

      it('should not call method login', () => {
        expect(authenticationServiceMock.login).toBeCalledTimes(0);
      });
    });

    describe('when form is valid', () => {
      beforeEach(() => {
        component.createForm();
        component.loginForm.get('email').setValue('email@email.com');
        component.loginForm.get('password').setValue('password');
        component.login();
      });

      it('should call method login', () => {
        expect(authenticationServiceMock.login).toBeCalledTimes(1);
      });

      it('should call method navigate', () => {
        expect(routerMock.navigate).toHaveBeenCalledWith(['admin']);
      });
    });
  });
});
