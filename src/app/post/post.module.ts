import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post.routing.module';

@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule, ReactiveFormsModule],
})
export class PostModule {}
