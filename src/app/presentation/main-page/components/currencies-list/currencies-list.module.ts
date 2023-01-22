import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrencyAdapterModule } from 'src/app/adapters/currency-adapter.module';
import { CurrenciesListComponent } from './currencies-list.component';
import { FilterPipe } from './currencies-list.pipe';

@NgModule({
  declarations: [CurrenciesListComponent, FilterPipe],
  exports: [CurrenciesListComponent],
  imports: [CurrencyAdapterModule, CommonModule],
})
export class CurrenciesListModule {}
