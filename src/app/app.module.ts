import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
