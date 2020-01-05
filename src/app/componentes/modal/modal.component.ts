import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../servicios/data-api.service';
import {inmueblesInterface} from '../../models/inmuebles';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
  }

  guardarInmueble(Inmuebleform: NgForm):void{
    //Guardar
    this.dataApi.createInmueble(Inmuebleform.value);

    //Modificar
  }

}
