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
    this.postService.create(post).subscribe(
      () => {
        this.toastrService.showSuccessMessage('Post created');
        this.form.reset();
      },
      (message) => {
        console.log(message);
        this.toastrService.showErrorMessage(message.error);
      }
    );
  }
}
