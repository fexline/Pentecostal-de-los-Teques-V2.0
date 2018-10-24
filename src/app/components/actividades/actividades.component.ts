import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicio
import { Servicio1Service} from "../../services/servicio1.service";
//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
// Clase
import {Actividades} from "../../class/actividades"
import { from } from 'rxjs';
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  
  listaActividades: Actividades[];
  constructor(
    public servicio1Service: Servicio1Service,
    private toastr: ToastrService

    ) { }


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
    if(confirm('Esta seguro que desea Eliminar esta actividad?'))
  {
    this.servicio1Service.deleteActividades($key);
    this.toastr.success('successfull','Se elimino la Actividad');
  }
  };

  edit2(editForma: NgForm ){
  
    if(confirm('Esta seguro que desea guardar los cambios realizado en esta actividad?'))
    {
    this.servicio1Service.updateActividades(editForma.value);
    this.toastr.success('successfull','Cambios Realizados Con Exito');
    }
 }

}

