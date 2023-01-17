import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface SymbolContent {
  [SymbolName: string]: {
    description: string;
    code: string;
  };
}

export interface CurrencyExchangeMock {
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    rate: number;
  };
  date: string;
  result: number;
}

@Injectable()
export class ExchangeRateCurrencyService {
  constructor(private httpClient: HttpClient) {}

  getAllSymbols(): Observable<SymbolContent> {
    return this.httpClient
      .get<any>(`${environment.API_URL}/symbols`)
      .pipe(map((data) => data.symbols));
  }

  convertExchange(
    from: string,
    to: string,
    amount: string = '1'
  ): Observable<CurrencyExchangeMock> {
    return this.httpClient
      .get<any>(
        `${environment.API_URL}/convert?from=${from}&to=${to}&amount=${amount}`
      )
      .pipe(
        map((data) => {
          const { query, info, date, result } = data;
          return {
            query,
            info,
            date,
            result,
          };
        })
      );
  }
}
