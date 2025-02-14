import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'proyecto001';
  nombre = 'Juanmi';
  edad : number = 12;
  fumador = false;
  sueldos : number[] = [1200, 1500, 1700];

  contador = 0;

  provincias = [
    {id:1, nombre:"Huelva"},
    {id:2, nombre:"Sevilla"},
    {id:3, nombre:"Almeria"},
    {id:4, nombre:"Cordoba"},
    {id:5, nombre:"Cadiz"},
  ];

  esFumador(){
    return this.fumador?"Es Fumador":"No es Fumador";
  }
  diHola(){
    alert("Hola!");
  }
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }


}
