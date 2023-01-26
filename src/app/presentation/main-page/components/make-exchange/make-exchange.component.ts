import { Component, Inject, Input, OnChanges } from '@angular/core';
import { tap } from 'rxjs';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter-service.di.token';
import { CurrencyPersistentInterfaceServiceToken } from 'src/app/injection-tokens/currency-persistent.service.di.token';
import { Currency, CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/usecases/currency-adapter-service.usecase';
import { CurrencyExchangePersistentService } from 'src/app/usecases/currency-persistent.service.usecase';
import { v4 as uuidv4 } from 'uuid';

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
  isHigherThan10000k = false;

  constructor(
    @Inject(CurrencyAdapterInterfaceToken)
    private currencyService: CurrencyService,
    @Inject(CurrencyPersistentInterfaceServiceToken)
    private currencyPersistentService: CurrencyExchangePersistentService
  ) {}

  ngOnChanges(): void {
    this.isLoading = true;
    this.currencyService
      .calculateCurrencyExchange(
        this.exchangeData.currencies.from.acronym,
        this.exchangeData.currencies.to.acronym,
        this.exchangeData.value
      )
      .pipe(
        tap((exchange) => {
          this.currencyService
            .calculateCurrencyExchange(
              exchange.currencyFrom,
              'USD',
              exchange.valueFrom
            )
            .subscribe((exchange) => {
              if (exchange.valueTo > 10000) {
                this.isHigherThan10000k = true;
              }
            });
        })
      )
      .subscribe((currencyExchange) => {
        this.isLoading = false;
        this.processedExchangeData = {
          ...currencyExchange,
          id: uuidv4(),
          isHigherThan10000k: this.isHigherThan10000k,
        };
        if (!this.currencyPersistentService.getAll()) {
          this.currencyPersistentService.add([this.processedExchangeData]);
        } else {
          this.currencyPersistentService.addASingleExchange(
            this.processedExchangeData
          );
        }
      });
  }
}
