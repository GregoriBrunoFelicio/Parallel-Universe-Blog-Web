import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  post: Post;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.activatedRoute.snapshot.data.subscribe((data) => {
      this.post = data.post;
    });
  }
}
