import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CurrencyApiService } from 'src/app/usecases/currency-api.service.usecase';
import { environment } from 'src/environments/environment';

@Injectable()
export class ExchangeRateCurrencyService implements CurrencyApiService {
  constructor(private httpClient: HttpClient) {}

  getAllSymbols(): Observable<any> {
    return this.httpClient
      .get<any>(`${environment.API_URL}/symbols`)
      .pipe(map((data) => data.symbols));
  }

  convertExchange(
    from: string,
    to: string,
    amount: number = 1
  ): Observable<any> {
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
            id: uuidv4(),
          };
        })
      );
  }
}
