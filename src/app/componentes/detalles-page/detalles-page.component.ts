import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';
import { inmueblesInterface } from '../../models/inmuebles';

@Component({
  selector: 'app-detalles-page',
  templateUrl: './detalles-page.component.html',
  styleUrls: ['./detalles-page.component.scss']
})
export class DetallesPageComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
 
  public inmuebles = [];
  public inmueble = '';
  
  ngOnInit() { 
  this.dataApi.readAllInmuble().subscribe( inmuebles=> {
      console.log('INMUEBLES', inmuebles);
      this.inmuebles = inmuebles;
    }
  )
  }

}
