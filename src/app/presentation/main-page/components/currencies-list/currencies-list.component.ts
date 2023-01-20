import { Component, Inject, OnInit } from '@angular/core';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter-service.di.token';
import { Currency } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/usecases/currency-adapter-service.usecase';

@Component({
  templateUrl: './currencies-list.component.html',
  selector: 'app-c-list',
})
export class CurrenciesListComponent implements OnInit {
  currenciesList!: Currency[];
  currenciesListPaginated!: Currency[];
  currenciesPerPage: number = 5;
  currenciesCurrentPage: number = 0;

  constructor(
    @Inject(CurrencyAdapterInterfaceToken)
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.currencyService.availableCurrencies().subscribe((currencies) => {
      this.currenciesList = currencies;
    });
    this.setPaginatedList();
  }

  setPaginatedList(): void {
    const currentPageIndex =
      this.currenciesCurrentPage * this.currenciesPerPage;

    const currencyListCopy = [...this.currenciesList];

    this.currenciesListPaginated = currencyListCopy.splice(
      currentPageIndex,
      currentPageIndex + this.currenciesPerPage
    );
  }
}
