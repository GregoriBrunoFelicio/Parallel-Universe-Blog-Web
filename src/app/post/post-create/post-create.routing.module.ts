import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth/auth-guard';
import { PostCreateComponent } from './post-create.component';

const routes: Routes = [
  { path: '', component: PostCreateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostCreateRoutingModule {}
