import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//subir imagen 
import { AngularFireStorage} from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
//servicio
import { Servicio1Service} from "../../services/servicio1.service";
//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
// clase
import { Actividades } from '../../class/actividades';
@Component({
  selector: 'app-crear-actividades',
  templateUrl: './crear-actividades.component.html',
  styleUrls: ['./crear-actividades.component.css']
})
export class CrearActividadesComponent implements OnInit {
// variables para carga de imagen
profileUrl: string;
file;
uploadPercent: Observable<number>;
downloadURL: Observable<string>;
url:string;

  constructor(
    public servicio1Service: Servicio1Service,
    private toastr: ToastrService,
      // cargar imagen
      private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.servicio1Service.getActividades();
    this.resetForm();
  }
  onSubmit(actividadesForm:NgForm)
  { if(confirm('Esta seguro que desea guardar esta actividad?'))
  { actividadesForm.value.ruta = this.profileUrl ;
    console.log(actividadesForm.value);
    console.log(this.profileUrl);
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
// cargar imagen a fire store cloud 


getFile(event) {
  this.file = event.target.files[0];
  var metadata = {
    contentType: 'image/jpeg',
  };
  if (this.file) {
    const filePath ='Actividades/' + Math.random().toString(13).substring(2) + this.file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload( filePath,this.file, metadata);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL(); // {{ downloadURL | async }}
          this.downloadURL.subscribe(url => {
            this.profileUrl = url; // {{ profileUrl }}
            console.log(this.profileUrl);
           
           
          });
        })
      )
      .subscribe();
  } else {
    console.log('Ooppsss');
  }
}
}