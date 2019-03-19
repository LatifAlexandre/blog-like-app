import { TranslateService } from '@ngx-translate/core';
import { ModalService } from './../services/modal.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  //keys of the strings in language files
  @Input() titleKey;
  @Input() messageKey;
  @Input() cancelKey;
  @Input() confirmKey;

  @Output() confirmedEvent = new EventEmitter<boolean>();

  constructor(public translate: TranslateService) {}

  ngOnInit() {}

  onConfirm() {
    console.log("onConfirm");
    this.confirmedEvent.emit(true);
  }

  onCancel() {
    console.log("onCancel");
    this.confirmedEvent.emit(false);
  }
}
