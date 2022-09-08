import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Empleave}from './empleave';

@Injectable({
  providedIn: 'root'
})
export class EmpleaveService {

  constructor(private http:HttpClient) { }

  getEmpleave(){
    return this.http.get<Empleave[]>('http://localhost/furniture_emp/listleave.php');
  }
}


