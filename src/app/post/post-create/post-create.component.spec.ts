import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/auth/authentication.service';
import { User } from 'src/app/shared/models/user';
import { ToastService } from 'src/app/shared/toast.service';
import { PostService } from '../post.service';
import { PostCreateComponent } from './post-create.component';

describe('PostCreateComponent', () => {
  let component: PostCreateComponent;
  let fixture: ComponentFixture<PostCreateComponent>;

  const toastServiceMock = {
    showSuccessMessage: jest.fn(),
    showErrorMessage: jest.fn(),
  };

  const postServiceMock = {
    create: jest.fn(() => of({})),
    getById: jest.fn(() => of([])),
  };

  const authenticationServiceMock = {
    getUser: jest.fn(),
  };

  const activatedRouteMock = {
    snapshot: { paramMap: convertToParamMap({ id: 1 }) },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCreateComponent],
      imports: [ReactiveFormsModule, CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        FormBuilder,
        { provide: ToastService, useValue: toastServiceMock },
        { provide: PostService, useValue: postServiceMock },
        { provide: AuthenticationService, useValue: authenticationServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    let createFormSpy;
    beforeEach(() => {
      createFormSpy = jest.spyOn(component, 'createForm');
      authenticationServiceMock.getUser.mockResolvedValue({
        id: 1,
        name: 'bob',
      } as User);
      component.ngOnInit();
    });
    it('should call method create form', () => {
      expect(createFormSpy).toHaveBeenCalledTimes(1);
    });
    it('the user should be defined', () => {
      expect(component.user).toBeDefined();
    });
  });

  describe('handle', () => {
    describe('when form is valid', () => {
      let resetFormSpy;
      beforeEach(() => {
        jest.clearAllMocks();
        component.createForm();
        component.form.get('title').setValue('title');
        component.form.get('description').setValue('description');
        component.form.get('text').setValue('text');
        component.user = { id: 1 } as User;
        component.user = { id: 1 } as User;
        resetFormSpy = jest.spyOn(component.form, 'reset');
        component.handle();
      });

      it('should call method create', () => {
        expect(postServiceMock.create).toHaveBeenCalledTimes(1);
      });

      it('should call method showSuccessMessage', () => {
        expect(toastServiceMock.showSuccessMessage).toHaveBeenCalledTimes(1);
      });

      it('should call reset method', () => {
        expect(resetFormSpy).toHaveBeenCalledTimes(1);
      });
    });

    describe('when form is not valid', () => {
      beforeEach(() => {
        jest.clearAllMocks();
        component.createForm();
        component.handle();
      });

      it('should not call method create', () => {
        expect(postServiceMock.create).toHaveBeenCalledTimes(0);
      });
    });

    describe('when there is an exception', () => {
      beforeEach(() => {
        jest.clearAllMocks();
        component.createForm();
        component.form.get('title').setValue('title');
        component.form.get('description').setValue('description');
        component.form.get('text').setValue('text');
        component.user = { id: 1 } as User;
        postServiceMock.create.mockReturnValue(throwError(new Error()));
        component.handle();
      });

      it('should call method showErrorMessage', () => {
        expect(toastServiceMock.showErrorMessage).toHaveBeenCalledTimes(1);
      });
    });
  });
});
