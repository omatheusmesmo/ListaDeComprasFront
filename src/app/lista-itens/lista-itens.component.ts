import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

interface Item {
  id: number;
  nome: string;
  quantidade: number;
  categoria: string;
  comprado: boolean;
}

@Component({
  selector: 'app-lista-itens',
  standalone: true,
  imports: [
    CommonModule, // Para diretivas básicas (*ngFor, *ngIf, etc.)
    MatTableModule, // Para a tabela
    MatButtonModule // Para os botões
  ],
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.scss']
})
export class ListaItensComponent {
  itens: Item[] = [
    { id: 1, nome: 'Arroz', quantidade: 2, categoria: 'Alimentos', comprado: false },
    { id: 2, nome: 'Coca-Cola', quantidade: 1, categoria: 'Bebidas', comprado: false },
    { id: 3, nome: 'Sabão', quantidade: 3, categoria: 'Limpeza', comprado: false }
  ];

  displayedColumns: string[] = ['nome', 'quantidade', 'categoria', 'status', 'acoes'];

  excluirItem(index: number): void {
    this.itens.splice(index, 1);
  }

  editarItem(index: number): void {
    const item = this.itens[index];
    item.nome = prompt('Novo nome do item', item.nome) || item.nome;
    item.quantidade = parseInt(prompt('Nova quantidade', item.quantidade.toString()) || item.quantidade.toString(), 10);
    item.categoria = prompt('Nova categoria', item.categoria) || item.categoria;
    const compradoInput = prompt('O item foi comprado? (sim/nao)', item.comprado ? 'sim' : 'nao');
    item.comprado = compradoInput ? compradoInput.toLowerCase() === 'sim' : false;
  }
}
