import { NgModule } from '@angular/core';
import { CurrencyAdapterModule } from 'src/app/adapters/currency-adapter.module';
import { CurrenciesModule } from './components/currencies/currencies.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [CurrenciesModule, CurrencyAdapterModule],
})
export class MainPageModule {}
