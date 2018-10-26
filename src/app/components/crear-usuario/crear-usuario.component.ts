import { Component, OnInit } from '@angular/core';
//servicio
import {AuthService} from '../../services/auth.service';
//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
  public email : string;
  public password : string; 
 
  constructor(
    private toastr: ToastrService,
   public autService : AuthService
  ) { }

  ngOnInit() {
  }
  OnSubmitaddUser(){
    this.autService.registeruser(this.email ,this.password)
    .then( (res)=>{
    this.toastr.success('successfull','Usuario creado con exito');
  }).catch( ( err) =>{
    
    this.toastr.error('Error','El usuario no se creo');
    this.toastr.warning('Warning','Valide la informacion del usuario, es posible que este ya este creado');
  });
  }

}
