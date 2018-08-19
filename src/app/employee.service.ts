import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {emps} from './employees'
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url :string='./assets/employee.json'

  constructor(private http :HttpClient) { }

  getEmployees():Observable<emps[]>{
    return this.http.get<emps[]>(this.url);

  }
  // postEmployees():Observable<emps[]>{
  //   return this.http.post<emps[]>(this.url);
  // }

}
