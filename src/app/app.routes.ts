import { Routes } from '@angular/router';
import { ListaItensComponent } from './lista-itens/lista-itens.component';
import { FormularioItemComponent } from './formulario-item/formulario-item.component';

export const routes: Routes = [
  { path: '', component: ListaItensComponent },
  { path: 'adicionar', component: FormularioItemComponent },
  { path: 'editar/:id', component: FormularioItemComponent,
  //  getPrerenderParams: () => {
  //    // Você pode fornecer uma lista de IDs mockados ou //pegar dados da sua API
  //    return [
   //     { id: 1 },
  //      { id: 2 },
  //      { id: 3 }
  //    ];
  //  }
  }
];
