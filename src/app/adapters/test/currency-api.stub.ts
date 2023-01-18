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
      date: '2023-01-17',
      result: 46.174937,
    };

    return of(response);
  }
}
