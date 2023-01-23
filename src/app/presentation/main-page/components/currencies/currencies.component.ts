import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Component, Inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CurrencyAdapterInterfaceToken } from "src/app/injection-tokens/currency-adapter-service.di.token";
import { Currency } from "src/app/models/currency.model";
import { CurrencyService } from "src/app/usecases/currency-adapter-service.usecase";
import { paginationQuery } from "./components/currencies-pagination/currencies-pagination.pipe";

@Component({
    selector: 'app-currencies',
    templateUrl: './currencies.component.html'
})
export class CurrenciesComponent implements OnInit {
    currencyFilter: string = "";
    currencies: Currency[] = []
    currenciesPerPage: number = 5;
    selectedCurrency?: Currency;
    currentPage: number = 0;
    paginationQuery: paginationQuery = {
        start: 0,
        finish: 5
    }
    @Output() emitSelectedCurrency = new EventEmitter<Currency>

    constructor(
        @Inject(CurrencyAdapterInterfaceToken)
        private currencyService: CurrencyService
      ) {}
        

    handleFilterEvent(filtro: string) {
        this.currencyFilter = filtro
        this.changePaginationRule(0)
    }

    handleSelectedCurrency(currency: Currency) {
        this.selectedCurrency = currency
        this.emitSelectedCurrency.emit(currency)
    }

    handlePaginationCurrentPageEvent(currentPageEventData: number) {
        this.currentPage = currentPageEventData
        this.changePaginationRule(this.currentPage)
    }

    handleCurrenciesPerPageEvent(currenciesPerPage: number) {
       this.currenciesPerPage = currenciesPerPage
       this.changePaginationRule(this.currentPage)
    }

    changePaginationRule(currentPage: number) {
        const query = {
            start: currentPage * this.currenciesPerPage,
            finish: (currentPage * this.currenciesPerPage) + this.currenciesPerPage
        }

        this.paginationQuery = query
    }

    ngOnInit(): void {
       this.currencyService
                .availableCurrencies()
                .subscribe((currencies) => {
                    this.currencies = currencies;
       })
    }
}