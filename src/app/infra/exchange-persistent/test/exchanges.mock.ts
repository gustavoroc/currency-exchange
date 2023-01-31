import { CurrencyExchange } from 'src/app/models/currency.model';

export const exchange: CurrencyExchange = {
  currencyFrom: 'USD',
  valueFrom: 100,
  currencyTo: 'BRL',
  valueTo: 600,
  rate: 6,
  time: new Date().toLocaleTimeString(),
  date: new Date().toLocaleDateString(),
};
export const exchange1: CurrencyExchange = {
  currencyFrom: 'USD',
  valueFrom: 200,
  currencyTo: 'BRL',
  valueTo: 1200,
  rate: 6,
  time: new Date().toLocaleTimeString(),
  date: new Date().toLocaleDateString(),
};
