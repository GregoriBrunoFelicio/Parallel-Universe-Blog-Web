import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from 'src/app/shared/resolvers/post.resolver';
import { PostViewComponent } from './post-view.component';

const routes: Routes = [
  { path: '', component: PostViewComponent, resolve: { post: PostResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostViewRoutingModule {}
