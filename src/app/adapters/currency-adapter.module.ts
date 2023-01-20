import { NgModule } from '@angular/core';
import { ExchangeRateCurrencyModule } from '../infra/exchange-rate/exchange-rate-currency.module';
import { CurrencyAdapterInterfaceToken } from '../injection-tokens/currency-adapter-service.di.token';
import { CurrencyAdapterService } from './currency-adapter.service';

@NgModule({
  imports: [ExchangeRateCurrencyModule],
  providers: [
    {
      provide: CurrencyAdapterInterfaceToken,
      useClass: CurrencyAdapterService,
    },
  ],
})
export class CurrencyAdapterModule {}
