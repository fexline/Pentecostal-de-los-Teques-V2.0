import { Injectable } from '@angular/core';
//import { ActividadeslistComponent } from '../components/actividadeslist/actividadeslist.component';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database"
import {Actividades} from "../class/actividades"

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
  // Metodos 
  actividadeslist: AngularFireList<any>;
  selectActividades: Actividades= new Actividades();


  constructor(private firebase: AngularFireDatabase) {}
  getActividades()
  {
    return this.actividadeslist = this.firebase.list('actividades');
  }
  // insertar actividades
  insertActividades(actividades: Actividades){

    this.actividadeslist.push({
      nombre: actividades.nombre,
      descripcion: actividades.descripcion,
      direccion: actividades.direccion,
      encargado: actividades.encargado,
      fecha: actividades.fecha
    });

  }
//Atucalizar actividades
updateActividades(actividades: Actividades)
{
  this.actividadeslist.update(actividades.$key, {
    nombre: actividades.nombre,
    descripcion: actividades.descripcion,
    direccion: actividades.direccion,
    encargado: actividades.encargado,
    fecha: actividades.fecha
  });
}
// eliminar Actividades
deleteActividades($key: string)
{
this.actividadeslist.remove($key);
}
} 



