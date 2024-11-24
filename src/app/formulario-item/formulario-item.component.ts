import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-item',
  standalone: true,
  imports: [CommonModule],  // Importar módulos necessários, como CommonModule
  templateUrl: './formulario-item.component.html',
  styleUrls: ['./formulario-item.component.scss']
})
export class FormularioItemComponent {
  // Lógica do componente
}
