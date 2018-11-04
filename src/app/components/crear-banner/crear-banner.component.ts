import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//subir imagen 
import { AngularFireStorage} from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
//servicio
import { BannerService} from "../../services/banner.service";
//Animacion Toastr
import {ToastrService} from 'ngx-toastr';
// clase
import { Banner } from '../../class/banner';



//subir imagen
@Component({
  selector: 'app-crear-banner',
  templateUrl: './crear-banner.component.html',
  styleUrls: ['./crear-banner.component.css']
})
export class CrearBannerComponent implements OnInit {
// variables para carga de imagen
profileUrl: string;
file;
uploadPercent: Observable<number>;
downloadURL: Observable<string>;
url:string;



  constructor(    
    // cargar datos en la base de datos 
    public bannerService: BannerService,
    // etiquetas de carga exitosa 
    private toastr: ToastrService,
    // cargar imagen
    private storage: AngularFireStorage
    
   
    ) { }

  ngOnInit() {
    this.bannerService.getBanner();
    this.resetForm();
  }

  // subir informacion a la base de datos 
  onSubmit(bannerForm:NgForm)
  
  {
     if(confirm('Esta seguro que desea guardar esta actividad?'))
  { bannerForm.value.ruta = this.profileUrl ;
    console.log(bannerForm.value);
    console.log(this.profileUrl);
    this.bannerService.insertBanner(bannerForm.value);
    this.resetForm(bannerForm);
    this.toastr.success('successfull','La Actividad se ha guardado con exicto');
  }
  }

  resetForm(bannerForm?:NgForm)
  {
    if(bannerForm != null)
     bannerForm.reset();
    this.bannerService.selectBanner = new Banner();
 }
  // cargar imagen a fire store cloud 


  getFile(event) {
    this.file = event.target.files[0];
    var metadata = {
      contentType: 'image/jpeg',
    };
    if (this.file) {
      const filePath ='banner/' + Math.random().toString(13).substring(2) + this.file.name;
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
