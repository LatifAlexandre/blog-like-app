import { ModalService } from './services/modal.service';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';
import { Config } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private modalService: ModalService,
    translateService: TranslateService,
    config: Config
    ) {
    translateService.addLangs(config.getConfig('supportedLanguages'));
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang(config.getConfig('defaultLanguage'));
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');

    this.initFirebase();
  }

  removeModal() {
    this.modalService.destroy();
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
