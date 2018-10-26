import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {
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
