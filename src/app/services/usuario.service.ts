import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Usuario} from "../class/usuario";

@Injectable({
  providedIn: 'root' 
})
export class UsuarioService {

  usuariolist: AngularFireList<any>;
  selectUsuario: Usuario= new Usuario();

  constructor(private firebase: AngularFireDatabase) { }
  getUsuario()
  {
    return this.usuariolist = this.firebase.list('usuario');
  }
  insertUsuario(usuario: Usuario){

    this.usuariolist.push({
      correo: usuario.correo,
      clave: usuario.clave,
      cusuario: usuario.cusuario,
      rudusuario: usuario.rudusuario,
      cbanner: usuario.cbanner,
      rudbanner: usuario.rudbanner,
      cactividades: usuario.cactividades,
      rudactividades: usuario.rudactividades
   
    }); 
  }
  updateUsuario(usuario: Usuario)
    {
      this.usuariolist.update(usuario.$key,{
        correo: usuario.correo,
      clave: usuario.clave,
      cusuario: usuario.cusuario,
      rudusuario: usuario.rudusuario,
      cbanner: usuario.cbanner,
      rudbanner: usuario.rudbanner,
      cactividades: usuario.cactividades,
      rudactividades: usuario.rudactividades
      });
    }
    
    deleteUsuario($key: string)
    {
    this.usuariolist.remove($key);
    }
  }

