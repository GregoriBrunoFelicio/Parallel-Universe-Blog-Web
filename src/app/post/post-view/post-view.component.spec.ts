import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PostViewComponent } from './post-view.component';

describe('PostViewComponent', () => {
  let component: PostViewComponent;
  let fixture: ComponentFixture<PostViewComponent>;

  const activatedRouteMock = {
    data: jest.fn(),
  };
  const fakeActivatedRoute = {
    snapshot: { data: { post: {} } },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostViewComponent],
      providers: [{ provide: ActivatedRoute, useClass: fakeActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
