// enrutamiento 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
//firebase
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
 import {conexion} from "../app/app.component";
 //aminaciones de angular , para uso de toastr
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import { ToastrModule} from 'ngx-toastr';
// services
import {Servicio1Service} from "./services/servicio1.service";
//componets
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { FamiliaPastoralComponent } from './components/familia-pastoral/familia-pastoral.component';
import { IglesiasHijasComponent } from './components/iglesias-hijas/iglesias-hijas.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { SistemasComponent } from './components/sistemas/sistemas.component';
import { BanerComponent } from './components/baner/baner.component';
import { NavbarClientesComponent } from './components/navbar-clientes/navbar-clientes.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { ActividadeslistComponent } from './components/actividadeslist/actividadeslist.component';
import { from } from 'rxjs';
//en rutamiento
const routes: Route[] = [
  {path:'', component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'quienes-somos', component: QuienesSomosComponent},
  {path:'familia-pastoral', component: FamiliaPastoralComponent},
  {path:'iglesias-hijas', component: IglesiasHijasComponent},
  {path:'donde-estamos', component: DondeEstamosComponent},
  {path:'actividades', component: ActividadesComponent},
  {path:'sistemas', component: SistemasComponent},
  {path:'actividadeslist', component: ActividadeslistComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    FamiliaPastoralComponent,
    IglesiasHijasComponent,
    DondeEstamosComponent,
    ActividadesComponent,
    SistemasComponent,
    BanerComponent,
    NavbarClientesComponent,
    PiePaginaComponent,
    ActividadeslistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
   AngularFireModule.initializeApp(conexion.config),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [
   Servicio1Service
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
