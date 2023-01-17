export interface Currency {
  fullName: string;
  acronym: string;
}

export interface CurrencyExchange {
  currencyFrom: Currency;
  valueFrom: number;

  currencyTo: Currency;
  valueTo: number;

  rate: number;
}
