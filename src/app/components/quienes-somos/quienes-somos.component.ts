import { Component, OnInit } from '@angular/core';
//servicio
import { Servicio1Service} from "../../services/servicio1.service";
// Clase
import {Actividades} from "../../class/actividades"
///fin
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  listaActividades: Actividades[];
  constructor(private servicio1Service: Servicio1Service) { }

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
