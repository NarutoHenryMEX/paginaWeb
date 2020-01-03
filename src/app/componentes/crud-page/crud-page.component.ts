import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss']
})
export class CrudPageComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public inmuebles = [];
  public inmueble = '';

  ngOnInit() {
  this.dataApi.readAllInmuble().subscribe(
    inmuebles=> {
      console.log('INMUEBLES', inmuebles);
      this.inmuebles = inmuebles;
    }
  )
  }

}
