import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceBase } from '../shared/service.base';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService extends ServiceBase {
  constructor(http: HttpClient) {
    super(http);
  }

  create(post: Post) {
    return this.http.post(`${this.url}/Post`, post);
  }
}
