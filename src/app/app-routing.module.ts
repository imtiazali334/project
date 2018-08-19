import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule,Routes} from '@angular/router';


import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { SliderComponent } from './slider/slider.component';
import { ServicesListComponent } from './services-list/services-list.component';

const routes: Routes =[
  {path:'home',component : HomeComponent},
  {path : 'About', component : AboutComponent},
  {path:'Services', component : ServicesComponent},
  {path : 'Products', component : ProductsComponent},
  {path:'Career',component : CareerComponent},
  {path : 'Contact', component : ContactComponent},
  {path:'',component :HomeComponent}
 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent =[ AppComponent,
  NavComponent, 
   AboutComponent,
   ProductsComponent,
   CareerComponent,
   ContactComponent,
   ServicesComponent,
  FooterComponent, 
   HomeComponent,
  MessageComponent,
  SliderComponent,
  ServicesListComponent]