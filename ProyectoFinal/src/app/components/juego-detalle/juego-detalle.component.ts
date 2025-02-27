import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoInterface } from '../../interfaces/juegos.interface';

@Component({
  selector: 'app-juego-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego-detalle.component.html',
  styleUrls: ['./juego-detalle.component.css']
})
export class JuegoDetalleComponent {
  @Input() juego!: JuegoInterface | null; // Recibe un juego o null
}
