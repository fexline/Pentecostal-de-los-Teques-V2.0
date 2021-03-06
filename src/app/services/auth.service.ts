import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database";
import * as firebase from 'firebase/app';
import { map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
 
    public afAuth: AngularFireAuth
  ) { }

registeruser(email: string, pass: string){
  return new Promise((resolve,reject)=>{
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
    .then( userdata => resolve(userdata),
    err => reject(err));
  }); 
}

loginEmail(email: string, pass: string){
  return new Promise((resolve,reject)=>{
    this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    .then( userdata => resolve(userdata),
    err => reject(err));
  }); 
}

getAuth(){
  
  return this.afAuth.authState.pipe(map (auth => auth));
  
}

  logout() {
    return this.afAuth.auth.signOut();
  }

}

