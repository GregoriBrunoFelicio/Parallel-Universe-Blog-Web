import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PostService } from '../post.service';
import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  const postServiceMock = {
    getAllActive: jest.fn(() => of([])),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: PostService, useValue: postServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
