import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  _MatTableDataSource,
} from '@angular/material/table';
import { CurrencyPersistentInterfaceServiceToken } from 'src/app/injection-tokens/currency-persistent.service.di.token';
import { CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyExchangePersistentService } from 'src/app/usecases/currency-persistent.service.usecase';

@Component({
  templateUrl: './history-page.component.html',
  selector: 'app-history-page',
})
export class HistoryPageComponent implements OnInit {
  persistedExchanges?: CurrencyExchange[];
  dataSource?: MatTableDataSource<CurrencyExchange>;
  displayedColumns = [
    'currencyFrom',
    'valueFrom',
    'currencyTo',
    'valueTo',
    'rate',
    'date',
    'Acoes',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    @Inject(CurrencyPersistentInterfaceServiceToken)
    private currencyPersistentService: CurrencyExchangePersistentService
  ) {}

  ngOnInit(): void {
    this.currencyPersistentService.currenciesExchange.subscribe((data) => {
      this.persistedExchanges = data;
      this.dataSource = new MatTableDataSource(this.persistedExchanges);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
  }
}
