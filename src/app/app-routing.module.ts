import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ErrorComponent} from './pages/error/error.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: 'ejemplo', component: HomeComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
