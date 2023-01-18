import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter-service.di.token';
import { Currency } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/usecases/currency-adapter-service.usecase';

@Component({
  templateUrl: './currencies-list.component.html',
})
export class CurrenciesListComponent implements OnInit {
  currenciesList?: Observable<Currency[]>;

  constructor(
    @Inject(CurrencyAdapterInterfaceToken)
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.currenciesList = this.currencyService.availableCurrencies();
  }
}
