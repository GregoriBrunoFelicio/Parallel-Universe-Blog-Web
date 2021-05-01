import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
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
  };

  const postServiceMock = {
    create: jest.fn(() => of([])),
  };

  const authenticationServiceMock = {
    getUser: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCreateComponent],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ToastService, useValue: toastServiceMock },
        { provide: PostService, useValue: postServiceMock },
        { provide: AuthenticationService, useValue: authenticationServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  describe('create', () => {
    let resetFormSpy;
    beforeEach(() => {
      resetFormSpy = jest.spyOn(component.form, 'reset');
      component.form.get('title').setValue('title');
      component.form.get('description').setValue('description');
      component.form.get('text').setValue('text');
      component.user = { id: 1 } as User;
      component.create();
    });

    it('should call reset method', () => {
      expect(resetFormSpy).toHaveBeenCalledTimes(1);
    });
  });
});
