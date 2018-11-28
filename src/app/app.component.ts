import { Usuario } from './clases/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = 'angular';
  public usuarios: Usuario;

  constructor() {
    this.usuarios = new Usuario('Alex', 'Carrillo');

  }
}
