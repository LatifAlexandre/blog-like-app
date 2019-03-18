import { Post } from './../model/post';
import { POST_LIST } from './../posts-mock';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts = POST_LIST;
  postsSubject = new Subject<Post[]>();

  constructor() {}

  emitPostsSubject() {
    this.posts.sort((a: Post, b: Post) => {
      return this.getTime(b.created_at) - this.getTime(a.created_at); //getTime used to handle undefined
    });
    this.postsSubject.next(this.posts);
  }

  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }

  addPost(postToAdd: Post) {
    const nextId = Math.max.apply(Math, this.posts
      .map((p) => p.id)
      ) + 1;

    postToAdd.id = nextId;
    this.posts.push(postToAdd);
    this.emitPostsSubject();
  }

  removePost(postToRemove: Post) {
    this.posts.splice(this.getPostIndex(postToRemove), 1);
    this.emitPostsSubject();
  }

  incrementLoveOfPost(post: Post) {
    this.posts[this.getPostIndex(post)].loveIts++;
    this.emitPostsSubject();
  }

  decrementLoveOfPost(post: Post) {
    this.posts[this.getPostIndex(post)].loveIts--;
    this.emitPostsSubject();
  }
  
  getPostIndex(post: Post) : number {
    return this.posts.findIndex(
      p => p === post
    );
  }
}
