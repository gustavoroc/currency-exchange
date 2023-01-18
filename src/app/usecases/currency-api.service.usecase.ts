import { Observable } from 'rxjs';

export interface CurrencyApiService {
  getAllSymbols(): Observable<any>;
  convertExchange(to: string, from: string, amount: number): Observable<any>;
}
