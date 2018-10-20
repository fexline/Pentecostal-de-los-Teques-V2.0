import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicio
import { Servicio1Service} from "../../services/servicio1.service";
// Clase
import {Actividades} from "../../class/actividades"
///fin
import { snapshotChanges } from 'angularfire2/database';
import { Subscriber } from 'rxjs';
import { element } from 'protractor';
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  
  listaActividades: Actividades[];
  constructor(private servicio1Service: Servicio1Service) 
  {
    
   }

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

}
