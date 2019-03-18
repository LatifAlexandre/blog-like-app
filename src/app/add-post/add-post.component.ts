import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../model/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      redirect: [true]
    });
  }

  get title() {
    return this.addPostForm.get('title') as FormControl;
  }

  get content() {
    return this.addPostForm.get('content') as FormControl;
  }

  get redirect() {
    return this.addPostForm.get('redirect') as FormControl;
  }

  onSubmit() {
    const newPost = new Post();
    newPost.title = this.title.value;
    newPost.content = this.content.value;
    this.postService.addPost(newPost);
    if (this.redirect.value) {
      this.router.navigate(['/posts']);
    } else {
      this.title.setValue('');
      this.content.setValue('');
    }
  }
}
