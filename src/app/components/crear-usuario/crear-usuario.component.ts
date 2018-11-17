import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicio
import {AuthService} from '../../services/auth.service';
import {UsuarioService} from '../../services/usuario.service';
//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
// clase
import { Usuario } from '../../class/usuario';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
  public correo : string;
  public clave : string; 
 
  constructor(
    private toastr: ToastrService,
    public usuarioService : UsuarioService,
   public autService : AuthService
  ) { }

  ngOnInit() {
    this.usuarioService.getUsuario();
  }

  OnSubmitaddUser(usuarioForm:NgForm){ 
    this.correo = usuarioForm.value.correo;
    this.clave = usuarioForm.value.clave;
    this.autService.registeruser(this.correo ,this.clave)
    .then( (res)=>{
      this.usuarioService.insertUsuario(usuarioForm.value);
    this.toastr.success('successfull','Usuario creado con exito');   
    console.log(usuarioForm.value);
    console.log(this.correo);
    console.log(this.clave);
  }).catch( ( err) =>{
    this.toastr.error('Error','El usuario no se creo');
    this.toastr.warning('Warning','Valide la informacion del usuario, es posible que este ya este creado');
    console.log(usuarioForm.value);
    console.log(this.correo);
    console.log(this.clave);
 
  });
  

  }

}
