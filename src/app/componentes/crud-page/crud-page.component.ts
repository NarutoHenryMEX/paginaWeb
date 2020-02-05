import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';7
import { inmueblesInterface } from '../../models/inmuebles';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss']
})
export class CrudPageComponent implements OnInit {

  constructor(private dataApi: DataApiService, public authService: AuthService) { }
  private inmuebles: inmueblesInterface [];
  public activo: boolean;
  public by: string;


  ngOnInit() {
   this.traerListaInmuebles();
   this.authService.getAuth().subscribe( auth => { //Permite saber si existen usuario activos
    if(auth){ //Si existe sesion
      this.activo = true; //es verdadero
      this.by = auth.email;
    } else { //Si no, entonces
      this.activo = false; //devolver un falso
    }
  });
  }

  traerListaInmuebles(){
    this.dataApi.readAllInmuebles().subscribe(inmuebles =>{
      this.inmuebles = inmuebles;
      console.log(inmuebles);
    });
  }

  borrarUnInmueble(idInmueble: string){
    const confirmacion = confirm("Seguro que desea eliminar este registro");
    if(confirmacion){
      this.dataApi.deleteInmueble(idInmueble);
    }
  }

  modificarUnInmueble(inmueble: inmueblesInterface){
    console.log(inmueble);
    this.dataApi.seleccionarInmueble = Object.assign({}, inmueble);
  }

  }


