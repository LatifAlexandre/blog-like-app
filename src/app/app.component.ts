import { POST_LIST } from './posts-mock';
import { Post } from './model/post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = POST_LIST;
}
