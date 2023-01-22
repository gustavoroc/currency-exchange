import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-pagination',
    templateUrl: './currencies-pagination.component.html'
})
export class CurrenciesPaginationComponent {

    @Input() currenciesCurrentPage: number = 0;
    @Input() currenciesPerPage: number = 5;
    @Input() currenciesListLength!: number
    @Input() processedCurrenciesListLength: number = 0

    @Output() currenciesPerPageEvent = new EventEmitter<number>()
    @Output() currenciesCurrentPageEvent = new EventEmitter<number>()

    setPage(forwards: boolean) {
        forwards ? this.currenciesCurrentPage++ : this.currenciesCurrentPage--;
        this.currenciesCurrentPageEvent.emit(this.currenciesCurrentPage)
    }

    setCurrenciesPerPage(numberOfCurrencies: number) {
        this.currenciesPerPage = numberOfCurrencies
        this.currenciesPerPageEvent.emit(this.currenciesPerPage)
    }
}