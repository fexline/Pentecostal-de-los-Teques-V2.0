import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PentecostalLosTeques';
}
export const conexion = {
  config: {
    apiKey: "AIzaSyCAG-VYFwTA9wS6SVN_6MVRjcjRS_E7_t4",
    authDomain: "pentecostalosteques.firebaseapp.com",
    databaseURL: "https://pentecostalosteques.firebaseio.com",
    projectId: "pentecostalosteques",
    storageBucket: "pentecostalosteques.appspot.com",
    messagingSenderId: "604442572079"

  }

};