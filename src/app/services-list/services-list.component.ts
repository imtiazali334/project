import { Component, OnInit } from '@angular/core';
import {ServicelistService} from '../servicelist.service'

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  public print=[];
  constructor(private servicelist:ServicelistService) { }

  ngOnInit() {
    this.servicelist.getlist()
    .subscribe(data=>this.print=data)

  }

}
