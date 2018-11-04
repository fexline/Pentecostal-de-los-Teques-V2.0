import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicio
import { BannerService} from "../../services/banner.service";
//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
// Clase
import {Banner} from "../../class/banner"

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {
  listaBanner: Banner[];
  constructor(
    public bannerService: BannerService,
    private toastr: ToastrService
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
    
  }
 
onedit(Banner: Banner)
{
this.bannerService.selectBanner = Object.assign({},Banner);
};
ondelete($key: string)
{
  if(confirm('Esta seguro que desea Eliminar esta actividad?'))
{
  this.bannerService.deleteBanner($key);
  this.toastr.success('successfull','Se elimino la Actividad');
}
};

edit2(editForma: NgForm ){

  if(confirm('Esta seguro que desea guardar los cambios realizado en esta actividad?'))
  {
  this.bannerService.updateBanner(editForma.value);
  this.toastr.success('successfull','Cambios Realizados Con Exito');
  }
}
  }
  