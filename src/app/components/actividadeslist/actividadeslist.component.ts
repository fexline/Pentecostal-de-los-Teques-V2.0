import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//servicio
import { Servicio1Service} from "../../services/servicio1.service";
// clase
import { Actividades } from '../../class/actividades';
@Component({
  selector: 'app-actividadeslist',
  templateUrl: './actividadeslist.component.html',
  styleUrls: ['./actividadeslist.component.css']
})
export class ActividadeslistComponent implements OnInit {

  constructor(public servicio1Service: Servicio1Service) { }

  ngOnInit() 
  {
    this.servicio1Service.getActividades();
    this.resetForm();
  }
  
  onSubmit(actividadesForm:NgForm)
  {
    this.servicio1Service.insertActividades(actividadesForm.value);
    this.resetForm(actividadesForm);
  }



  resetForm(ActividadesForm?:NgForm)
  {
    if(ActividadesForm != null)
     ActividadesForm.reset();
    this.servicio1Service.selectActividades = new Actividades();
 }

}
