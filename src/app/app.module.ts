import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './menu-principal/navbar/navbar.component';
import { SidebarComponent } from './menu-principal/sidebar/sidebar.component';
import { AreaTrabajoComponent } from './menu-principal/area-trabajo/area-trabajo.component';
import { BarFooterComponent } from './menu-principal/bar-footer/bar-footer.component';
import { NombrePantallaComponent } from './menu-principal/nombre-pantalla/nombre-pantalla.component';
import { DecanoComponent } from './roles/decano/decano.component';
import { LoginComponent } from './login/login.component';
import { VentanaComponent } from './menu-principal/ventana/ventana.component';


//service

import { AuthService } from './services/auth/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AreaTrabajoComponent,
    BarFooterComponent,
    NombrePantallaComponent,
    DecanoComponent,
    LoginComponent,
    VentanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
