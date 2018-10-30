import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Banner} from "../class/banner";
@Injectable({
  providedIn: 'root' 
})
export class BannerService {
 // variables
 bannerlist: AngularFireList<any>;
 selectBanner: Banner= new Banner();

  constructor(private firebase: AngularFireDatabase) { }
  getBanner()
  {
    return this.bannerlist = this.firebase.list('banner');
  }
  // insertar Banner
  insertBanner(banner: Banner){

    this.bannerlist.push({
      nombre: banner.nombre,
      titulo: banner.titulo,
      nota: banner.nota,
      ruta: banner.ruta
    });

  }
//Actualizar Banner
updateBanner(banner: Banner)
{
  this.bannerlist.update(banner.$key,{
    nombre: banner.nombre,
    titulo: banner.titulo,
    nota: banner.nota,
    ruta: banner.ruta
  });
}
// eliminar Banner
deleteBanner($key: string)
{
this.bannerlist.remove($key);
}
}
 