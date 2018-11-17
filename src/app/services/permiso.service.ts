import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Permiso} from "../class/permiso";
@Injectable({
  providedIn: 'root'
})
export class PermisoService {
// variables
permisolist: AngularFireList<any>;
selectPermiso: Permiso= new Permiso();
  constructor(private firebase: AngularFireDatabase) { }
  getPermiso()
  {
    return this.permisolist = this.firebase.list('permiso');
  }
  // insertar Banner
  insertPermiso(permiso: Permiso){

    this.permisolist.push({
      correo: permiso.correo,
      crearbanner: permiso.crearbanner,
      crearusuario: permiso.crearusuario,
      
    });

  }
//Actualizar Banner
updatePermiso(permiso: Permiso)
{
  this.permisolist.update(permiso.$key,{
      correo: permiso.correo,
      crearbanner: permiso.crearbanner,
      crearusuario: permiso.crearusuario,
  });
}
// eliminar Banner
deletePermiso($key: string)
{
this.permisolist.remove($key);
}
}
 
