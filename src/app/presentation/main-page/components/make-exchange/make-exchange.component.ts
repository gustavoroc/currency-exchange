import { Component, Inject, Input, OnChanges } from '@angular/core';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter-service.di.token';
import { Currency, CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/usecases/currency-adapter-service.usecase';

export interface ExchangeData {
  currencies: {
    to: Currency;
    from: Currency;
  };
  value: number;
}

@Component({
  selector: 'app-make-exchange',
  templateUrl: 'make-exchange.component.html',
})
export class MakeExchangeComponent implements OnChanges {
  @Input() exchangeData!: ExchangeData;
  processedExchangeData?: CurrencyExchange;
  isLoading: boolean = false;

  constructor(
    @Inject(CurrencyAdapterInterfaceToken)
    private currencyService: CurrencyService
  ) {}

  ngOnChanges(): void {
    this.isLoading = true;
    this.currencyService
      .calculateCurrencyExchange(
        this.exchangeData.currencies.from.acronym,
        this.exchangeData.currencies.to.acronym,
        this.exchangeData.value
      )
      .subscribe((currencyExchange) => {
        this.isLoading = false;
        this.processedExchangeData = currencyExchange;
      });
  }
}
