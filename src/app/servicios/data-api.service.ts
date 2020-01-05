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
    
    this.listadoInmuebles = afs.collection<inmueblesInterface>('inmuebles');
    this.inmuebles = this.listadoInmuebles.valueChanges();
  }
  private listadoInmuebles: AngularFirestoreCollection<inmueblesInterface>;
  private inmuebles: Observable<inmueblesInterface[]>;
  private inmuebleDoc: AngularFirestoreDocument<inmueblesInterface>;
  private inmueble: Observable<inmueblesInterface>;
  public seleccionarInmueble: inmueblesInterface[];

  //Metodos principales del CRUD

  createInmueble(inmueble: inmueblesInterface): void {
    this.listadoInmuebles.add(inmueble);
    }

   //Metodo para traer TODOS los inmuebles
  readAllInmuebles(){
    return this.inmuebles = this.listadoInmuebles.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action =>{
        const data = action.payload.doc.data() as inmueblesInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  //Metodo para traer un solo inmueble
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

  //Metodo para modificar un inmueble por su id existente
  updateInmueble(inmueble: inmueblesInterface): void {
    let idInmueble = inmueble.id;
    this.inmuebleDoc = this.afs.doc<inmueblesInterface>(`inmueble/${idInmueble}`);
    this.inmuebleDoc.update(inmueble);
  }

  //Metodo para eliminar el inmueble por su id
  deleteInmueble(idInmueble: string): void {
    this.inmuebleDoc = this.afs.doc<inmueblesInterface>(`inmueble/${idInmueble}`);
    this.inmuebleDoc.delete();
  }


}
