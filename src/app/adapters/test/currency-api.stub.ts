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
  convertExchange(to: string, from: string, amount: string): Observable<any> {
    return of(1);
  }
}
