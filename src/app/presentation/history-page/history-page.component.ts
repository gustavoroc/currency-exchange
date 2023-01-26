import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  styleUrls: ['./history-page.component.css'],
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
    'time',
    'Acoes',
  ];

  @ViewChild(MatSort) sort!: MatSort;
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
      this.dataSource!.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
    this.dataSource!.sort = this.sort;
    this.dataSource!.sortingDataAccessor = (item, property) => {
      if (property == 'date') {
        const dateString = item.date;
        const splittedDate = dateString.split('/');
        const formattedDate = new Date(
          parseInt(splittedDate[2]),
          parseInt(splittedDate[1]),
          parseInt(splittedDate[0])
        );
        return formattedDate.getTime();
      } else if (property == 'time') {
        return item.time;
      } else {
        return item.valueTo;
      }
    };
  }
}
