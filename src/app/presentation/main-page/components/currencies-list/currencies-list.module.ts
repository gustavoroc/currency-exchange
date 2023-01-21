import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrencyAdapterModule } from 'src/app/adapters/currency-adapter.module';
import { CurrenciesListComponent } from './currencies-list.component';

@NgModule({
  declarations: [CurrenciesListComponent],
  exports: [CurrenciesListComponent],
  imports: [CurrencyAdapterModule, CommonModule],
})
export class CurrenciesListModule {}
