import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { inmueblesInterface } from '../models/inmuebles';
import { Observable } from 'rxjs/internal/observable';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  constructor(private afs: AngularFirestore){
    
    this.listadoInmueble = afs.collection<inmueblesInterface>('inmuebles');
    this.inmubles = this.listadoInmueble.valueChanges();
  }
  private listadoInmueble: AngularFirestoreCollection<inmueblesInterface>;
  private inmubles: Observable<inmueblesInterface[]>;
  private inmuebleDoc: AngularFirestoreDocument<inmueblesInterface>;
  private inmueble: Observable<inmueblesInterface>;

  //Metodos principales del CRUD

  createInmuble(){}

  readAllInmuble(){
    return this.inmubles = this.listadoInmueble.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action =>{
        const data = action.payload.doc.data() as inmueblesInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

readOneInmueble(idInmueble:string){ //Recibe el id del inmueble a mostrar
this.inmuebleDoc = this.afs.doc<inmueblesInterface>(`inmuebles/${idInmueble}`); //Va a la conexion de inmuebles y busca el id filtrado
return this.inmueble = this.inmuebleDoc.snapshotChanges().pipe(map(action =>{ //Devuelve el lnmueble
  if (action.payload.exists == false){ //Comprueba si existe
    return null; // Devuelve un null Si no existe
  }else{
    const data = action.payload.data() as inmueblesInterface; //Si existe, lo regresa
    data.id=action.payload.id;
    return data
  }
}));
}

  updateInmubele(){}

  deleteInmuble(){}


}
