import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Currency } from "src/app/models/currency.model";

@Component({
    selector: 'app-currencies-table',
    templateUrl: 'currencies-table.component.html'
})
export class CurrenciesTableComponent {
    @Input() currenciesList?: Currency[]; 
    @Output() emitSelectedCurrency = new EventEmitter<Currency>;

    selectedCurrency?: Currency;

    selectCurrency(currency: Currency) {
        this.selectedCurrency = currency
        this.emitSelectedCurrency?.emit(this.selectedCurrency)
    }
}