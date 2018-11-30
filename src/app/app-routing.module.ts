import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ErrorComponent} from './pages/error/error.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistroComponent} from './pages/registro/registro.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'login', component: LoginComponent },
  {path:'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
