import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.initFirebase();
  }

  initFirebase() {
    var config = {
      apiKey: "AIzaSyBDS5aeGsLiODlGGfTM4WqAKFbLM9n2b8M",
      authDomain: "http-client-demo-75eab.firebaseapp.com",
      databaseURL: "https://http-client-demo-75eab.firebaseio.com",
      projectId: "http-client-demo-75eab",
      storageBucket: "http-client-demo-75eab.appspot.com",
      messagingSenderId: "622665327558"
    };
    firebase.initializeApp(config);
  
  }
}
