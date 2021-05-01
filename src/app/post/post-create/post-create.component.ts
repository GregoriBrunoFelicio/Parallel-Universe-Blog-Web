import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastService,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  create() {
    if (this.form.invalid) return;

    const post = this.form.value as Post;
    post.date = new Date();
    post.active = true;
    post.userId = 562;

    this.postService.create(post).subscribe(
      (result: any) => {
        this.toastrService.showSuccessMessage(result);
        this.form.reset();
        console.log(result);
      },
      (message) => {
        this.toastrService.showErrorMessage(message.error);
      }
    );
  }
}
