import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public txtUsujario: String;
  public fecha: Date = new Date();
  public moneda: Number = 123;
  constructor() { }

  ngOnInit() {
  }

}
