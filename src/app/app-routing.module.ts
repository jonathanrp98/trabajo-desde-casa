import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {VentanaComponent} from './menu-principal/ventana/ventana.component';
import { DecanoComponent } from './roles/decano/decano.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'app', component: AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ventana', component: VentanaComponent},
  { path: 'ventana', component: VentanaComponent},
  { path: 'decano', component: DecanoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
