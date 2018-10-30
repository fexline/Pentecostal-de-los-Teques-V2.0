import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
//servicio
import {BannerService} from "../../services/banner.service";
// Clase
import {Banner} from "../../class/banner"
///fin
@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {
  listaBanner: Banner[];
  public isLogin: boolean;
  

  constructor(
    public authService : AuthService ,
    private bannerService: BannerService
  ) { }

  ngOnInit() { 

    this.bannerService.getBanner()
    .snapshotChanges()
    .subscribe(item=>{
      this.listaBanner = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listaBanner.push(x as Banner);
      });
    });

    this.authService.getAuth().subscribe( auth  => {
      if (auth) {
        this.isLogin = true;

      } else { 
        this.isLogin = false;
      }
    });
 
  }

}
 