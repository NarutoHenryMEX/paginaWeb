import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable(
  //providedIn: 'root'
)
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  //Metodo para iniciar sesion
  loginUser(email: string, pass: string){ //Se especifican los parametros que van a pasar y de que tipo
    return new Promise((resolve, reject) =>{  //El return nos debe de devolver un ok
      this.afAuth.auth.signInWithEmailAndPassword(email, pass) //Se usa este método que esta en la doc de firebase
      .then( userData => resolve(userData), //Si todo va bien, nos regresa en una variable los datos del user
      err => reject (err)); //Si existe un error, nos devuelve uno
    });
  }

  //Metodo para que nos devuelva los datos del usuario logeado
  getAuth(){
   
    return this.afAuth.authState.map(auth => auth);
  }

  //Metodo pasa salir
  logout(){ 
    return this.afAuth.auth.signOut();
  }

  //Inicia sesión en Google
  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

    //Inicia sesión en Facebook
  loginFacebook(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

}
