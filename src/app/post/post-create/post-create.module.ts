import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCreateComponent } from './post-create.component';
import { PostCreateRoutingModule } from './post-create.routing.module';

@NgModule({
  declarations: [PostCreateComponent],
  imports: [
    CommonModule,
    PostCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PostCreateModule {}
