import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/auth/authentication.service';
import { User } from 'src/app/shared/models/user';
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
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastService,
    private postService: PostService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.createForm();
    this.user = this.authenticationService.getUser();
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
    post.userId = this.user.id;

    console.log('chegou');
    this.postService.create(post).subscribe(
      (result: any) => {
        this.toastrService.showSuccessMessage(result);
        this.form.reset();
      },
      (message) => {
        this.toastrService.showErrorMessage(message.error);
      }
    );
  }
}
