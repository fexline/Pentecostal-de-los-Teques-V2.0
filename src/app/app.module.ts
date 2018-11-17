// enrutamiento 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//firebase
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule, AngularFirestore} from "angularfire2/firestore";
import {AngularFireStorageModule} from "angularfire2/storage"; 
import {AngularFireAuthModule} from'angularfire2/auth';
import {AngularFireDatabaseModule} from "angularfire2/database";
 import {conexion} from "../app/app.component";


 //aminaciones de angular , para uso de toastr
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import { ToastrModule} from 'ngx-toastr';
// services
import {FirestoreService} from "./services/firestore/firestore.service";
import {Servicio1Service} from "./services/servicio1.service";
import {BannerService} from "./services/banner.service";
import {UsuarioService} from "./services/usuario.service";
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {PermisoService} from "./services/permiso.service";
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
import { PrincipalAdministradorComponent } from './components/principal-administrador/principal-administrador.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrearActividadesComponent } from './components/crear-actividades/crear-actividades.component';
import { CrearBannerComponent } from './components/crear-banner/crear-banner.component';
import { DropZoneDirective } from './drop-zone.directive';
import { CatsComponent } from './cats/cats.component';
import { BannerListComponent } from './components/banner-list/banner-list.component';
import { PermisoUsuarioComponent } from './components/permiso-usuario/permiso-usuario.component';



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
  {path:'principal-administrador/actividadeslist', component: ActividadeslistComponent, canActivate: [AuthGuard]},
  {path:'principal-administrador/crear-usuario', component: CrearUsuarioComponent, canActivate: [AuthGuard]},
  {path:'principal-administrador/crear-banner', component: CrearBannerComponent, canActivate: [AuthGuard]},
  {path:'principal-administrador/crear-actividades', component: CrearActividadesComponent, canActivate: [AuthGuard]},
  {path:'principal-administrador', component: PrincipalAdministradorComponent, canActivate: [AuthGuard]},
  {path:'principal-administrador/banner-list', component: BannerListComponent, canActivate: [AuthGuard]},
  {path:'principal-administrador/permiso-usuario', component: PermisoUsuarioComponent, canActivate: [AuthGuard]}
  
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
    ActividadeslistComponent,
    PrincipalAdministradorComponent,
    CrearUsuarioComponent,
    CrearActividadesComponent,
    CrearBannerComponent,
    DropZoneDirective,
    CatsComponent,
    BannerListComponent,
    PermisoUsuarioComponent
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
   AngularFireModule.initializeApp(conexion.config),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
    
    
  ],
  providers: [
    AngularFirestore,
    FirestoreService,
   Servicio1Service,
   PermisoService,
   BannerService,
   UsuarioService,
   AuthService,
   AuthGuard
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
