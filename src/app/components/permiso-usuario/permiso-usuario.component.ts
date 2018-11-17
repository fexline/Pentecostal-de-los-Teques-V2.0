import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicio
import { UsuarioService} from "../../services/usuario.service";

//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
// Clase
import {Usuario} from "../../class/usuario";

import { from } from 'rxjs';

@Component({
  selector: 'app-permiso-usuario',
  templateUrl: './permiso-usuario.component.html',
  styleUrls: ['./permiso-usuario.component.css']
})
export class PermisoUsuarioComponent implements OnInit {
  listaUsuario: Usuario[];
  searchText: string = "";
  constructor(
    public usuarioService: UsuarioService,
    
    private toastr: ToastrService
  ) { }
 
  ngOnInit() {
    
    this.usuarioService.getUsuario()
    .snapshotChanges()
    .subscribe(item=>{
      this.listaUsuario = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listaUsuario.push(x as Usuario);
      });
    });
    
  }
  onedit(Usuario: Usuario)
  {
  this.usuarioService.selectUsuario = Object.assign({},Usuario);
  }; 
  
permiso(permisoForm: NgForm ){

  if(confirm('Esta seguro que desea guardar los cambios realizado en esta actividad?'))
  {
  this.usuarioService.updateUsuario(permisoForm.value);
  this.toastr.success('successfull','Cambios Realizados Con Exito');
  }
}


filterCondition(usuario) {
  return usuario.correo.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
}

ondelete($key: string)
{
  if(confirm('Esta seguro que desea Eliminar esta actividad?'))
{
  this.usuarioService.deleteUsuario($key);
  this.toastr.success('successfull','Se elimino la Actividad');
}
};
}

