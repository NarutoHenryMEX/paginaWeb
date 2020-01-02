import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public activo: boolean;
public nombreUsuario: string;
public emailUsuario: string;
public fotoUsuario: string;

  constructor(
    public authService: AuthService
  ) { }
    

  ngOnInit() { //metodo que se encarga de saber si esta activo o no
    this.authService.getAuth().subscribe( auth => { //Permite saber si existen usuario activos
      if(auth){ //Si existe sesion
        this.activo = true; //es verdadero
        this.nombreUsuario = auth.displayName; //Desplejar su nombre
        this.emailUsuario = auth.email; //y desplejar su correo
        this.fotoUsuario = auth.photoURL;
      } else { //Si no, entonces
        this.activo = false; //devolver un falso
      }
    });
  }

  onClickLogout(){
    this.authService.logout();
  }

}
