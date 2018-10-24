import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//servicio
import { Servicio1Service} from "../../services/servicio1.service";
//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
// clase
import { Actividades } from '../../class/actividades';
@Component({
  selector: 'app-actividadeslist',
  templateUrl: './actividadeslist.component.html',
  styleUrls: ['./actividadeslist.component.css']
})
export class ActividadeslistComponent implements OnInit {

  constructor(
    public servicio1Service: Servicio1Service,
    private toastr: ToastrService
    ) { }

  ngOnInit() 
  {
    this.servicio1Service.getActividades();
    this.resetForm();
  }
  
  onSubmit(actividadesForm:NgForm)
  { if(confirm('Esta seguro que desea guardar esta actividad?'))
  {
    this.servicio1Service.insertActividades(actividadesForm.value);
    this.resetForm(actividadesForm);
    this.toastr.success('successfull','La Actividad se ha guardado con exicto');
  }
  }



  resetForm(ActividadesForm?:NgForm)
  {
    if(ActividadesForm != null)
     ActividadesForm.reset();
    this.servicio1Service.selectActividades = new Actividades();
 }

}
