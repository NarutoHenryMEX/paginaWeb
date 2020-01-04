import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';
import { inmueblesInterface } from '../../models/inmuebles';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detalles-id-page',
  templateUrl: './detalles-id-page.component.html',
  styleUrls: ['./detalles-id-page.component.scss']
})
export class DetallesIdPageComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route:ActivatedRoute) { }
  public inmueble: inmueblesInterface = {};

  ngOnInit(){
    const idInmueble = this.route.snapshot.params['id']; //Extrae los parametros, id en especifico
    this.ReadDetalle(idInmueble);
  }

  ReadDetalle(idInmueble: string): void {
    
    this.dataApi.readOneInmueble(idInmueble).subscribe(inmueble =>{
     this.inmueble = inmueble;
    });
  } 

}