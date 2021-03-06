import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostViewComponent } from './post-view.component';
import { PostViewRoutingModule } from './post-view.routing.module';

@NgModule({
  declarations: [PostViewComponent],
  imports: [CommonModule, PostViewRoutingModule],
})
export class PostViewModule {}
