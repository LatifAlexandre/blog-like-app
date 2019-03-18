import { Post } from './../model/post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts = []; // or POST_LIST from './../posts-mock';
  postsSubject = new Subject<Post[]>();

  constructor() {}

  emitPostsSubject() {
    this.posts.sort((a: Post, b: Post) => {
      return b.created_at_ts - a.created_at_ts;
    });
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').orderByChild("created_at_ts")
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.posts.forEach((p: Post) => p.created_at = new Date(p.created_at_ts));
        this.emitPostsSubject();
      });
  }

  addPost(postToAdd: Post) {
    const nextId = Math.max.apply(Math, this.posts
      .map((p) => p.id)
      ) + 1;

    postToAdd.id = nextId;
    this.posts.push(postToAdd);
    this.savePosts();
    this.emitPostsSubject();
  }

  removePost(postToRemove: Post) {
    this.posts.splice(this.getPostIndex(postToRemove), 1);
    this.savePosts();
    this.emitPostsSubject();
  }

  incrementLoveOfPost(post: Post) {
    this.posts[this.getPostIndex(post)].loveIts++;
    this.savePosts();
    this.emitPostsSubject();
  }

  decrementLoveOfPost(post: Post) {
    this.posts[this.getPostIndex(post)].loveIts--;
    this.savePosts();
    this.emitPostsSubject();
  }
  
  getPostIndex(post: Post) : number {
    return this.posts.findIndex(
      p => p === post
    );
  }
}
