import { PostService } from './../services/post.service';
import { Post } from './../model/post';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (newPosts: Post[]) => this.posts = newPosts
    );
    this.postService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
  
}