import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';7
import { inmueblesInterface } from '../../models/inmuebles';
import { NgForm } from '@angular/forms';
import { VentanaEmergenteComponent } from '../ventana-emergente/ventana-emergente.component';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss']
})
export class CrudPageComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private inmuebles: inmueblesInterface [];
  


  ngOnInit() {
   this.traerListaInmuebles();
  }

  traerListaInmuebles(){
    this.dataApi.readAllInmuebles().subscribe(inmuebles =>{
      this.inmuebles = inmuebles;
      console.log(inmuebles);
    });
  }

  borrarUnLibro(){
    console.log('Borrado');
  }

  }


