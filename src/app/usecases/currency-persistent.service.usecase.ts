import { CurrencyExchange } from '../models/currency.model';

export interface CurrencyExchangePersistentService {
  getAll(): CurrencyExchange[];
  add(exchange: CurrencyExchange[]): void;
  delete(id: string): void;
  addASingleExchange(exchange: CurrencyExchange): void;
}
