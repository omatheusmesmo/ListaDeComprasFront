import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Importando o RouterOutlet para navegação
import { RouterModule } from '@angular/router';  // Importando o RouterModule para o roteamento
import { MatSlideToggleModule } from '@angular/material/slide-toggle';  // Importando o toggle

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSlideToggleModule, RouterModule, RouterOutlet],  // Importando ambos corretamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-de-compras';
}
