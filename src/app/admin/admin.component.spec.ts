import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  const routerMock = {
    navigate: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
      providers: [
        {
          provide: Router,
          useValue: routerMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
