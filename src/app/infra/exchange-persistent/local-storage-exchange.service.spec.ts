import { CurrencyExchange } from 'src/app/models/currency.model';
import { LocalStorageExchangeService } from './local-storage-exchange.service';

describe('LocalStorageExchangeService', () => {
  let service: LocalStorageExchangeService;

  let exchange: CurrencyExchange;
  let exchange1: CurrencyExchange;

  beforeEach(() => {
    service = new LocalStorageExchangeService();
    exchange = {
      currencyFrom: 'USD',
      valueFrom: 100,
      currencyTo: 'BRL',
      valueTo: 600,
      rate: 6,
      date: new Date().toISOString(),
    };
    exchange1 = {
      currencyFrom: 'USD',
      valueFrom: 200,
      currencyTo: 'BRL',
      valueTo: 1200,
      rate: 6,
      date: new Date().toString(),
    };
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should add a single exchange', () => {
    service.addASingleExchange(exchange);
    const exchanges = service.getAll();
    expect(exchanges.length).toEqual(1);
    expect(exchanges[0]).toEqual(exchange);
  });

  it('should get all exchanges', () => {
    service.addASingleExchange(exchange);
    const exchanges = service.getAll();
    expect(exchanges.length).toEqual(1);
    expect(exchanges[0].currencyFrom).toEqual(exchange.currencyFrom);
    expect(exchanges[0].valueFrom).toEqual(exchange.valueFrom);
    expect(exchanges[0].currencyTo).toEqual(exchange.currencyTo);
    expect(exchanges[0].valueTo).toEqual(exchange.valueTo);
    expect(exchanges[0].rate).toEqual(exchange.rate);
  });

  it('should add multiple exchanges', () => {
    service.add([exchange, exchange1]);
    const exchanges = service.getAll();
    expect(exchanges.length).toEqual(2);
    expect(exchanges[0].currencyFrom).toEqual(exchange.currencyFrom);
    expect(exchanges[0].valueFrom).toEqual(exchange.valueFrom);
    expect(exchanges[0].currencyTo).toEqual(exchange.currencyTo);
    expect(exchanges[0].valueTo).toEqual(exchange.valueTo);
    expect(exchanges[0].rate).toEqual(exchange.rate);
    expect(exchanges[1].currencyFrom).toEqual(exchange1.currencyFrom);
    expect(exchanges[1].valueFrom).toEqual(exchange1.valueFrom);
    expect(exchanges[1].currencyTo).toEqual(exchange1.currencyTo);
    expect(exchanges[1].valueTo).toEqual(exchange1.valueTo);
    expect(exchanges[1].rate).toEqual(exchange1.rate);
  });

  it('should delete an exchange by id', () => {
    exchange.id = '123';
    service.addASingleExchange(exchange);
    service.delete('123');
    const exchanges = service.getAll();
    expect(exchanges.length).toEqual(0);
  });
});
