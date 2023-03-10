import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrencyApiService } from 'src/app/usecases/currency-api.service.usecase';

@Injectable()
export class CurrencyApiStub implements CurrencyApiService {
  getAllSymbols(): Observable<any> {
    const response = {
      BRL: {
        description: 'Brazilian Real',
        code: 'BRL',
      },
      AED: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
      ZWT: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
      TWT: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
      QWE: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
      EQWE: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
      QWQE: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
      QEWE: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
      QW3E: {
        description: 'United Arab Emirates Dirham',
        code: 'AED',
      },
    };

    return of(response);
  }
  convertExchange(to: string, from: string, amount: number): Observable<any> {
    const response = {
      query: {
        from: 'USD',
        to: 'EUR',
        amount: 50,
      },
      info: {
        rate: 0.923499,
      },
      date: '2023-01-23',
      result: 46.174937,
    };

    return of(response);
  }
}
