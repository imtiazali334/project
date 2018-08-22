import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import {emps} from          './employees'

@Injectable({
  providedIn: 'root'
})
export class ServicelistService {
public url:string='../assets/employee'
  constructor(private http:HttpClient) { }

  getlist():Observable<emps[]>{
   return this.http.get<emps[]>(this.url);
  }
}
