import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: false,
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {

  // Es necesario inportar el @Input
  @Input() valor:number = 1;




}
