import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  public isLogin: boolean;

  constructor(
    public authService : AuthService 

  ) { }

  ngOnInit() { 

    this.authService.getAuth().subscribe( auth  => {
      if (auth) {
        this.isLogin = true;

      } else { 
        this.isLogin = false;
      }
    });
 
  } 

}
 
 