import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateCurrencyService } from './exchange-rate-currency.service';
import { CurrencyApiInterfaceToken } from 'src/app/injection-tokens/currency-api.service.di.token';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: CurrencyApiInterfaceToken,
      useClass: ExchangeRateCurrencyService,
    },
  ],
})
export class ExchangeRateCurrencyModule {}
