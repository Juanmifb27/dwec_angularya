import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JuegosComponent } from './components/juegos/juegos.component';
import { JuegoDetalleComponent } from './components/juego-detalle/juego-detalle.component';
import { JuegoInterface } from './interfaces/juegos.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JuegosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoFinal';
  ListaJuego: JuegoInterface[]= []

  juegoSeleccionado: JuegoInterface | null = null; // Para almacenar el juego seleccionado
  
}
