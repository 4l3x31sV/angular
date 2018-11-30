import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../clases/user';
import {UtilServiceService} from '../../services/util-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public usuario: User;
  public nombre: string;
  public apellido: string;
  public edad: number;
  regForm: FormGroup;
  public mostrar: boolean;
  constructor(private formBuilder: FormBuilder,
              private utilService: UtilServiceService,
              private router: Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      txtNombre:['', Validators.required],
      apellido:['', Validators.required],
      edad:['', Validators.required]
    });
  }
  onSubmit() {
    if(this.regForm.invalid) {
      alert('formulario invalido');
    } else {
      this.usuario = {
        nombre:this.nombre,
        apellido: this.apellido,
        edad: this.edad
      };
      window.localStorage.setItem('data', this.usuario.nombre);
      this.utilService.setData(this.usuario);
      alert('Formulario es valido');
    }
  }
  miFuncion() {
    alert(this.nombre);
  }
  cambiarValor() {

    this.mostrar = !this.mostrar;
    this.router.navigate(['home']);
  }
}
