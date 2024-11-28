import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario-item',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule, // Importação para usar mat-form-field
    MatInputModule,     // Importação para usar mat-input
    MatButtonModule,    // Importação para usar botões do Angular Material
  ],
  templateUrl: './formulario-item.component.html',
  styleUrls: ['./formulario-item.component.scss']
})
export class FormularioItemComponent {
  // Lógica do componente
}
