import { Post } from './../model/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
    console.log('PostListItemComponent')
  }

  onLoveIt(){
    this.post.loveIts++;
  }

  onHateIt(){
    this.post.loveIts--;
  }
}
