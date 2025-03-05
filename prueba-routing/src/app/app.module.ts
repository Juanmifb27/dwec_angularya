import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoproductosComponent,
    ListadoclientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
