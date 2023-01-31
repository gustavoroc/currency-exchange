import { CurrencyExchange } from 'src/app/models/currency.model';

const exchange1: CurrencyExchange = {
  currencyFrom: 'USD',
  valueFrom: 1000,
  currencyTo: 'BRL',
  valueTo: 3500,
  rate: 3.5,
  date: '2023-01-31',
  time: '15:30:00',
  id: 'exchange_1',
  isHigherThan10000k: false,
};

const exchange2: CurrencyExchange = {
  currencyFrom: 'EUR',
  valueFrom: 2000,
  currencyTo: 'BRL',
  valueTo: 7000,
  rate: 3.5,
  date: '2023-01-31',
  time: '16:00:00',
  id: 'exchange_2',
  isHigherThan10000k: true,
};

const exchange3: CurrencyExchange = {
  currencyFrom: 'GBP',
  valueFrom: 500,
  currencyTo: 'BRL',
  valueTo: 1750,
  rate: 3.5,
  date: '2023-01-31',
  time: '16:30:00',
  id: 'exchange_3',
  isHigherThan10000k: false,
};

const exchange4: CurrencyExchange = {
  currencyFrom: 'JPY',
  valueFrom: 5000,
  currencyTo: 'BRL',
  valueTo: 17500,
  rate: 3.5,
  date: '2023-01-31',
  time: '17:00:00',
  id: 'exchange_4',
  isHigherThan10000k: false,
};

const exchange5: CurrencyExchange = {
  currencyFrom: 'CHF',
  valueFrom: 800,
  currencyTo: 'BRL',
  valueTo: 2800,
  rate: 3.5,
  date: '2023-01-31',
  time: '17:30:00',
  id: 'exchange_5',
  isHigherThan10000k: true,
};

const exchange6: CurrencyExchange = {
  currencyFrom: 'CAD',
  valueFrom: 700,
  currencyTo: 'BRL',
  valueTo: 2450,
  rate: 3.5,
  date: '2023-01-31',
  time: '18:00:00',
  id: 'exchange_6',
  isHigherThan10000k: false,
};

const exchange7: CurrencyExchange = {
  currencyFrom: 'AUD',
  valueFrom: 600,
  currencyTo: 'BRL',
  valueTo: 2100,
  rate: 3.5,
  date: '2023-01-31',
  time: '18:30:00',
  id: 'exchange_7',
  isHigherThan10000k: false,
};
const exchanges: CurrencyExchange[] = [
  exchange1,
  exchange2,
  exchange3,
  exchange4,
  exchange5,
  exchange6,
  exchange7,
];

export { exchanges };
