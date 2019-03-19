import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { ModalService } from './../services/modal.service';
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

  confirmDialogInputs = {
    titleKey: 'post-item.confirm-dialog.title',
    messageKey: 'post-item.confirm-dialog.message',
    confirmKey: 'post-item.confirm-dialog.confirm',
    cancelKey: 'post-item.confirm-dialog.cancel'
  }

  constructor(
    private postService: PostService,
    private modalService: ModalService,
    public translate: TranslateService
    ) {}

  ngOnInit() {}

  onLoveIt(){
    this.postService.incrementLoveOfPost(this.post);
  }

  onHateIt(){
    this.postService.decrementLoveOfPost(this.post);
  }

  onRemove() {
    const confirmDialogComponentRef = this.modalService.init(ConfirmDialogComponent, this.confirmDialogInputs, {});
    
    confirmDialogComponentRef.instance.confirmedEvent.subscribe(
      (event) => this.onConfirmRemove(event)
    );
  }

  onConfirmRemove(confirmed: boolean) {
    if(confirm) {
      this.postService.removePost(this.post);
    }
    this.modalService.destroy();
  }
}
