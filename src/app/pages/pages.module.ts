import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactoComponent,
    AboutComponent,
  ],
  exports: [
    HomeComponent,
    ContactoComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class PagesModule { }
