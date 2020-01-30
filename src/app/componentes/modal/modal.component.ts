import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../servicios/data-api.service';
import {inmueblesInterface} from '../../models/inmuebles';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi:DataApiService, public authService: AuthService) { }
  public activo: boolean;
  public by: string;

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => { //Permite saber si existen usuario activos
      if(auth){ //Si existe sesion
        this.activo = true; //es verdadero
        this.by = auth.email;
      } else { //Si no, entonces
        this.activo = false; //devolver un falso
      }
    });
  }

  guardarInmueble(inmuebleForm: NgForm):void{
    //Guardar
    this.dataApi.createInmueble(inmuebleForm.value);

    //Modificar
  }

}
