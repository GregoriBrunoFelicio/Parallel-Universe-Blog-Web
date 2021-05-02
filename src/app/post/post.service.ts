import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAllActive(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/Post/AllActive`);
  }

  getById(id: number) {
    return this.http.get<Post>(`${this.url}/Post/${id}`);
  }
}
