import { Observable } from 'rxjs';

export interface CurrencyApiService {
  getAllSymbols(): Observable<any>;
  convertExchange(from: string, to: string, amount: number): Observable<any>;
}
