import { BehaviorSubject } from 'rxjs';
import { CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyExchangePersistentService } from 'src/app/usecases/currency-persistent.service.usecase';
import { exchanges } from './currencies-exchange.mock';

export class PersistentServiceStub
  implements CurrencyExchangePersistentService
{
  currenciesExchange = new BehaviorSubject<CurrencyExchange[]>(exchanges);

  getAll(): CurrencyExchange[] {
    throw Error();
  }
  add(exchange: CurrencyExchange[]): void {
    throw Error();
  }
  delete(id: string): void {
    const deleteExchanges = exchanges;
    deleteExchanges.pop();
    this.currenciesExchange.next(deleteExchanges);
  }
  addASingleExchange(exchange: CurrencyExchange): void {
    throw Error();
  }
}
