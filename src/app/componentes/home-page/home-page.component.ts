import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../servicios/data-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
