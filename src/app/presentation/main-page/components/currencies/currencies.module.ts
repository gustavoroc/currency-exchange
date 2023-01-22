import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CurrenciesFilterComponent } from "./components/currencies-filter/currencies-filter.component";
import { FilterPipe } from "./components/currencies-filter/currencies-list.pipe";
import { CurrenciesPaginationComponent } from "./components/currencies-pagination/currencies-pagination.component";
import { PaginationPipe } from "./components/currencies-pagination/currencies-pagination.pipe";
import { CurrenciesTableComponent } from "./components/currencies-table/currencies-table.component";
import { CurrenciesComponent } from "./currencies.component";

@NgModule({
    declarations: [
        CurrenciesFilterComponent,
        CurrenciesTableComponent,
        CurrenciesPaginationComponent,
        CurrenciesComponent,
        FilterPipe,
        PaginationPipe
    ],
    exports: [CurrenciesComponent],
    imports: [CommonModule]
})
export class CurrenciesModule {}