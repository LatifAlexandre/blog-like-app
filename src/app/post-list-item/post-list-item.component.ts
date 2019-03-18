import { PostService } from './../services/post.service';
import { Post } from './../model/post';
import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  constructor(
    private postService: PostService,
    translate: TranslateService
    ) {}

  ngOnInit() {}

  onLoveIt(){
    this.postService.incrementLoveOfPost(this.post);
  }

  onHateIt(){
    this.postService.decrementLoveOfPost(this.post);
  }

  onRemove() {
    this.postService.removePost(this.post);
  }
}
