import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryPageComponent } from './history-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [HistoryPageComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
})
export class HistoryPageModule {}
