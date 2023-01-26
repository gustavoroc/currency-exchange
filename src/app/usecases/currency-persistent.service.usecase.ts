import { BehaviorSubject, Subject } from 'rxjs';
import { CurrencyExchange } from '../models/currency.model';

export interface CurrencyExchangePersistentService {
  currenciesExchange: BehaviorSubject<CurrencyExchange[]>;
  getAll(): CurrencyExchange[];
  add(exchange: CurrencyExchange[]): void;
  delete(id: string): void;
  addASingleExchange(exchange: CurrencyExchange): void;
}
