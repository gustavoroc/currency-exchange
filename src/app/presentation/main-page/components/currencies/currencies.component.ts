import { ViewChild } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter.service.di.token';
import { Currency } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/usecases/currency-adapter.service.usecase';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent {
  dataSource!: MatTableDataSource<Currency>;
  displayedColumns: string[] = ['fullName', 'acronym'];
  selectedCurrency?: Currency;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  emitCurrency(currency: Currency) {
    this.selectedCurrency = currency;
    this.dialogRef.close(currency);
  }

  constructor(
    @Inject(CurrencyAdapterInterfaceToken)
    private currencyService: CurrencyService,
    public dialogRef: MatDialogRef<CurrenciesComponent>
  ) {
    currencyService.availableCurrencies().subscribe((currencies) => {
      this.dataSource = new MatTableDataSource(currencies);
      this.dataSource!.paginator = this.paginator!;
      this.dataSource!.sort = this.sort!;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource!.filter = filterValue.trim().toLowerCase();
    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }
}
