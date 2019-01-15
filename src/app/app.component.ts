import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picolo';

  constructor()
  {
    var config = {
      apiKey: "AIzaSyDg_mczMGksdD_Ikt5zGe27Tw3PjdiPBTo",
      authDomain: "supercolo.firebaseapp.com",
      databaseURL: "https://supercolo.firebaseio.com",
      projectId: "supercolo",
      storageBucket: "supercolo.appspot.com",
      messagingSenderId: "990186096187"
    };
    firebase.initializeApp(config);
  }
}
