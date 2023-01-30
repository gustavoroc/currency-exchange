import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CurrenciesComponent } from './currencies.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CurrenciesComponent],
  exports: [CurrenciesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
  ],
})
export class CurrenciesModule {}
