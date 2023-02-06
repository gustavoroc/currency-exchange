import { Observable } from 'rxjs';
import { Currency, CurrencyExchange } from '../models/currency.model';

export interface CurrencyService {
  availableCurrencies(): Observable<Currency[]>;
  calculateCurrencyExchange(
    from: string,
    to: string,
    value: number
  ): Observable<CurrencyExchange>;
}
