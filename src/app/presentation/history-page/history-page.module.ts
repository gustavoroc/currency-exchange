import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryPageComponent } from './history-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteExchangeModal } from './components/delete-exchange-modal.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [HistoryPageComponent, DeleteExchangeModal],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class HistoryPageModule {}
