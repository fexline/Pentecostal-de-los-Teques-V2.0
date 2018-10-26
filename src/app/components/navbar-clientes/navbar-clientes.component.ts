import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navbar-clientes',
  templateUrl: './navbar-clientes.component.html',
  styleUrls: ['./navbar-clientes.component.css']
})
export class NavbarClientesComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public email: string;
  public password: string;
 
  constructor(
    public authService : AuthService,
    public router: Router,
    private toastr: ToastrService 
  
  ) { }

  ngOnInit() 
  {
    this.authService.getAuth().subscribe( auth  => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.email = auth.email;

      } else { 
        this.isLogin = false;
      }
    });
  }
  Logout(){
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
  OnSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then ( (res) =>{
      this.router.navigate(['/principal-administrador']);
      this.toastr.info(this.email, 'Bienvenido');
      
    }).catch( (err) =>{
      this.toastr.error('Error','Usuario o Password incorrecto');
    
    });
  }
}
