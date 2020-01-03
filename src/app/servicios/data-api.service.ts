import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { inmublesInterface } from '../models/inmuebles';
import { Observable } from 'rxjs/internal/observable';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  constructor(private afs: AngularFirestore){
    
    this.listadoInmueble = afs.collection<inmublesInterface>('inmuebles');
    this.inmubles = this.listadoInmueble.valueChanges();
  }
  private listadoInmueble: AngularFirestoreCollection<inmublesInterface>;
  private inmubles: Observable<inmublesInterface[]>;

  //Metodos principales del CRUD

  createInmuble(){}

  readAllInmuble(){
    return this.inmubles = this.listadoInmueble.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action =>{
        const data = action.payload.doc.data() as inmublesInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  updateInmubele(){}

  deleteInmuble(){}


}
