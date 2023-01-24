import { CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyExchangePersistentService } from 'src/app/usecases/currency-persistent.service.usecase';

export class LocalStorageExchangeService
  implements CurrencyExchangePersistentService
{
  private static readonly CURRENCY_EXCHANGE_KEY = 'currency_exchange';

  addASingleExchange(exchange: CurrencyExchange): void {
    const exchanges = this.getAll();
    exchanges.push(exchange);
    localStorage.setItem(
      LocalStorageExchangeService.CURRENCY_EXCHANGE_KEY,
      JSON.stringify(exchanges)
    );
  }

  getAll(): CurrencyExchange[] {
    const exchangeString = localStorage.getItem(
      LocalStorageExchangeService.CURRENCY_EXCHANGE_KEY
    );

    return exchangeString ? JSON.parse(exchangeString) : [];
  }

  add(exchange: CurrencyExchange[]): void {
    const exchanges = this.getAll();
    localStorage.setItem(
      LocalStorageExchangeService.CURRENCY_EXCHANGE_KEY,
      JSON.stringify([...exchanges, ...exchange])
    );
  }

  delete(id: string): void {
    const exchange = this.getAll();
    const updatedExchange = exchange.filter((ex) => ex.id !== id);
    localStorage.setItem(
      LocalStorageExchangeService.CURRENCY_EXCHANGE_KEY,
      JSON.stringify(updatedExchange)
    );
  }
}
