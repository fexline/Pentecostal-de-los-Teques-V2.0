import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
//servicio
import { UsuarioService} from "../../services/usuario.service";
import {AuthService} from '../../services/auth.service';
// Clase
import {Usuario} from "../../class/usuario"
import { equalPath } from '@angular/router/src/url_tree';

///fin
@Component({
  selector: 'app-principal-administrador',
  templateUrl: './principal-administrador.component.html',
  styleUrls: ['./principal-administrador.component.css']
})
export class PrincipalAdministradorComponent implements OnInit {
  listaUsuario: Usuario[];

  searchText: string ;
  public nombreUsuario: string;
  public email: string;
  selectUsuario: Usuario= new Usuario();
  constructor(
    private usuarioService: UsuarioService,
    public router: Router,
    public authService : AuthService
    
    
    ) { } 

  ngOnInit( ) {
    this.authService.getAuth().subscribe( auth  => {
      
        
        this.email = auth.email;
        this.nombreUsuario = auth.displayName;
        this.searchText = this.email;
         
    });

    this.usuarioService.getUsuario()
    .snapshotChanges()
    .subscribe(item=>{
      this.listaUsuario = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        element.payload
        x["$key"] = element.key;
        this.listaUsuario.push(x as Usuario);
        console.log(this.email)
        console.log(this.searchText ) 
        
      });
    });
  }
  filterCondition(usuario) {
    return usuario.correo.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
   
  }
  
  
