import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateCurrencyService } from './exchange-rate-currency.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: 'CurrencyApiService',
      useClass: ExchangeRateCurrencyService,
    },
  ],
})
export class ExchangeRateCurrencyModule {}
