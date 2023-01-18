import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CurrencyApiInterfaceToken } from '../injection-tokens/currency-api-service.di.token';
import { Currency, CurrencyExchange } from '../models/currency.model';
import { CurrencyApiService } from '../usecases/currency-api.service.usecase';
import { CurrencyService } from '../usecases/currency-service.usecase';

@Injectable()
export class CurrencyAdapterService implements CurrencyService {
  constructor(
    @Inject(CurrencyApiInterfaceToken)
    private currencyApiService: CurrencyApiService
  ) {}

  availableCurrencies(): Observable<Currency[]> {
    return this.currencyApiService.getAllSymbols().pipe(
      map((currencies) => {
        return this.normalizeExternalCurrencies(currencies);
      })
    );
  }

  normalizeExternalCurrencies(unnormalizedCurrencies: any): Currency[] {
    return Object.values(unnormalizedCurrencies).map(
      (unnormalizedCurrency: any) => {
        const currency: Currency = {
          fullName: unnormalizedCurrency.description,
          acronym: unnormalizedCurrency.code,
        };

        return currency;
      }
    );
  }

  calculateCurrencyExchange(
    from: string,
    to: string,
    value: number
  ): Observable<CurrencyExchange> {
    return this.currencyApiService.convertExchange(to, from, value).pipe(
      map((data) => {
        const { query, info, result } = data;
        const currencyExchange: CurrencyExchange = {
          currencyFrom: query.from,
          valueFrom: query.amount,
          currencyTo: query.to,
          valueTo: result,
          rate: info.rate,
        };

        return currencyExchange;
      })
    );
  }
}
