import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../servicios/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
public email: string;
public pass: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public mensajeFlash: FlashMessagesService

  ) { }

  ngOnInit() {
    
  }

  onSubmitLoginUser(){
    this.authService.loginUser(this.email, this.pass)
    .then((res) => {
     this.mensajeFlash.show('Inicio de Sesión Correcto', 
     {cssClass:'alert-success', timeout: 4000}); 
     this.router.navigate(['/crud']);
    }).catch((err) => {
      this.mensajeFlash.show('No se puede iniciar sesión, asegure que su cuenta sea correcta o comuniquese con el administrador del sistema', 
      {cssClass:'alert-danger', timeout: 6000}); 
      this.router.navigate(['/crud']);
      
    });
  }
  
  
}
