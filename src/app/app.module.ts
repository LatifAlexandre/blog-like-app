import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
const ROUTES: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'new', component: AddPostComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AddPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
