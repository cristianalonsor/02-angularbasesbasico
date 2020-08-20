import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    // ContactoComponent,
    // HomeComponent,
    MenuComponent
  ],
  imports: [
    // el 99% de los casos las cosas con 'Module' van importadas acá
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
