import { Component, OnInit } from '@angular/core';
import {ServiciosService} from "../../services/servicios.service";
import {Usuario} from "../../clases/usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public txtUsujario: string;
  public fecha: Date = new Date();
  public moneda: Number = 123;
  public usuarios: Array<Usuario>;
  constructor(private service: ServiciosService) {
    this.llamarServicio();
  }

  ngOnInit() {
  }

  public llamarServicio() {
    this.service
      .getGlobal<Array<Usuario>>('/user/all',null)
      .subscribe(data => {
        this.usuarios = data;
        console.log(this.usuarios);
    }, error => {
        alert('Error');
      });
  }

}
