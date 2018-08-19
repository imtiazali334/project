import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../employee.service'

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  public employees = [];
  constructor(private emp:EmployeeService) { }

  ngOnInit() {
  this.emp.getEmployees()
  .subscribe(data => this.employees= data);
  }

}
