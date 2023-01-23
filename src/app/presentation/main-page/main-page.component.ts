import { Component } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  toCurrency?: Currency;
  fromCurrency?: Currency;
  exchangeValue?: number;

  setCurrency(to: boolean, currency: Currency) {
    if (to) {
      this.toCurrency = currency;
    } else {
      this.fromCurrency = currency;
    }
  }

  dealWithInputedValue(exchange: { value: number; type: string }) {
    const { value } = exchange;
    this.exchangeValue = value;
  }
}
