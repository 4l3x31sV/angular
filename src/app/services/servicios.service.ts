import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {enviroment} from '../util/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private headers: HttpHeaders;
  private url:String;

  constructor(private http:HttpClient) {
    this.url = enviroment.url;
  }
  public getGlobal<Object>(url: String) {
     // localhost.... + /user/all
    return this.http.get<Object>(this.url + url);
  }
  public postGlobal<Object>(object: any, url: String,token: String) {
    const valor = JSON.stringify(object);
    if(token) {
      return this.http.post<Object>(this.url + url, valor, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('token', token)
      });
    } else {
      return this.http.post<Object>(this.url + url, valor, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      });
    }
  }
}
