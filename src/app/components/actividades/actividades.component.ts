import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicio
import { Servicio1Service} from "../../services/servicio1.service";
// Clase
import {Actividades} from "../../class/actividades"
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  
  listaActividades: Actividades[];
  constructor(public servicio1Service: Servicio1Service) { }

  ngOnInit()
{
    this.servicio1Service.getActividades()
    .snapshotChanges()
    .subscribe(item=>{
      this.listaActividades = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listaActividades.push(x as Actividades);
      });
    });
  }
onedit(Actividades: Actividades)
  {
this.servicio1Service.selectActividades = Object.assign({},Actividades);
  };
ondelete($key: string)
  {
    this.servicio1Service.deleteActividades($key);
  };
  onSubmit(editForm: NgForm)
  {
    this.servicio1Service.updateActividades(editForm.value);

  }
  
}

