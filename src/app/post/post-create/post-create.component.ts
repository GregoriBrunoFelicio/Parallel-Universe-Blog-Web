import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getIdFromRoute();
    this.createForm();
    this.user = this.authenticationService.getUser();
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      text: ['', Validators.required],
      active: [true],
    });

    this.updateFormValues();
  }

  updateFormValues() {
    const id = this.getIdFromRoute();
    if (!id) return;
    this.postService.getById(id).subscribe((post) => {
      this.form.patchValue(post);
    });
  }

  getIdFromRoute() {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  createPostModel() {
    const post = this.form.value as Post;
    post.date = new Date();
    post.userId = this.user.id;
    return post;
  }

  create() {
    if (this.form.invalid) return;
    const post = this.createPostModel();

    this.postService.create(post).subscribe(
      (result: any) => {
        this.toastrService.showSuccessMessage(result.message);
        this.form.reset();
      },
      (message) => {
        this.toastrService.showErrorMessage(message.error);
      }
    );
  }

  update() {
    if (this.form.invalid) return;
    const post = this.createPostModel();

    this.postService.create(post).subscribe(
      (result: any) => {
        this.toastrService.showSuccessMessage(result.message);
        this.form.reset();
      },
      (message) => {
        this.toastrService.showErrorMessage(message.error);
      }
    );
  }
}
