import { NgModule } from '@angular/core';
import { CurrencyAdapterModule } from 'src/app/adapters/currency-adapter.module';
import { CurrenciesModule } from './components/currencies/currencies.module';
import { MakeExchangeComponent } from './components/make-exchange/make-exchange.component';
import { SelectExchangeComponent } from './components/select-exchange/select-exchange.component';
import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SelectExchangeComponent,
    MakeExchangeComponent,
  ],
  exports: [MainPageComponent],
  imports: [CurrenciesModule, CurrencyAdapterModule],
})
export class MainPageModule {}
