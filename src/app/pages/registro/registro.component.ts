import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../clases/user';

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
  constructor(private formBuilder: FormBuilder) { }

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
      alert('Formulario es valido');
    }
  }
  miFuncion() {
    alert(this.nombre);
  }
  cambiarValor() {
    this.mostrar = !this.mostrar;
  }
}
