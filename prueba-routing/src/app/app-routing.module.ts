import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoproductosComponent } from './listadoproductos/listadoproductos.component';
import { ListadoclientesComponent } from './listadoclientes/listadoclientes.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'listadoproductos', component:ListadoproductosComponent},
  {path:'listadoclientes', component:ListadoclientesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
