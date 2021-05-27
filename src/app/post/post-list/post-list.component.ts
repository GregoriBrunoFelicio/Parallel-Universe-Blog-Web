import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/auth/authentication.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    public autenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.posts$ = this.postService.getAllActive();
  }
}
