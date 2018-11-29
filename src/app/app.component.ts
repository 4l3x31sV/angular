import { Usuario } from './clases/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: String = 'angular';
  public usuarios: any;
  constructor() {

  }
  setTitulo(nombre: String) {
    if (true) {
      console.log('true');
    }
    for(let i=0; i<10;i++) {

    }
  }
}
