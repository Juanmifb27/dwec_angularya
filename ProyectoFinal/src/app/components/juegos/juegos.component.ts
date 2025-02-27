import { Component, OnInit } from '@angular/core';
import { RawgService } from '../../services/rawg.service';
import { JuegoInterface } from '../../interfaces/juegos.interface';
import { JuegosExterno } from '../../interfaces/juegos-externo.interface';
import { CommonModule } from '@angular/common';
import { JuegoDetalleComponent } from '../juego-detalle/juego-detalle.component';

@Component({
  selector: 'app-juegos',
  standalone: true,
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css'],
  imports: [CommonModule, JuegoDetalleComponent]
})
export class JuegosComponent implements OnInit{

  
  ListaJuego: JuegoInterface[] = [];
  busqueda: string = "";
  count: number = 0;
  next: string | null = null;
  previous: string | null = null;
  
juegoSeleccionado: JuegoInterface | null = null; // Para almacenar el juego seleccionado

constructor(private rawgService: RawgService){}

  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos(url?: string) {
    this.rawgService.getJuegos(url).subscribe({
      next: (result: JuegosExterno) => {
        this.ListaJuego = result.results;
        this.count = result.count;
        this.next = result.next;
        this.previous = result.previous;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  buscarJuegos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.busqueda = target.value;

    if (this.busqueda.trim()) {
      this.rawgService.buscarJuegos(this.busqueda).subscribe({
        next: (result: JuegosExterno) => {
          this.ListaJuego = result.results;
          this.count = result.count;
          this.next = result.next;
          this.previous = result.previous;
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.getJuegos();
    }
  }

  seleccionarJuego(juego: JuegoInterface) {
    this.juegoSeleccionado = juego;
  }

  irAPagina(url: string | null) {
    if (url) {
      this.getJuegos(url);
    }
  }
}