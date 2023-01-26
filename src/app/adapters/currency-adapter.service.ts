import { Inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { CurrencyApiInterfaceToken } from '../injection-tokens/currency-api-service.di.token';
import { Currency, CurrencyExchange } from '../models/currency.model';
import { CurrencyApiService } from '../usecases/currency-api.service.usecase';
import { CurrencyService } from '../usecases/currency-adapter-service.usecase';

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
    return this.currencyApiService.convertExchange(from, to, value).pipe(
      map((data) => {
        const { query, info, result, date } = data;
        const currencyExchange: CurrencyExchange = {
          currencyFrom: query.from,
          valueFrom: query.amount,
          currencyTo: query.to,
          valueTo: result,
          rate: info.rate,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        };

        return currencyExchange;
      })
    );
  }
}
