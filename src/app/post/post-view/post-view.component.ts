import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  post: Post = {} as Post;
  constructor(
    private postService: PostService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.postService.getById(id).subscribe((post) => {
      this.post = post;
    });
  }
}
