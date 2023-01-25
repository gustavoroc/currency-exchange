import { Component, Inject, OnInit } from '@angular/core';
import { CurrencyPersistentInterfaceServiceToken } from 'src/app/injection-tokens/currency-persistent.service.di.token';
import { CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyExchangePersistentService } from 'src/app/usecases/currency-persistent.service.usecase';

@Component({
  templateUrl: './history-page.component.html',
  selector: 'app-history-page',
})
export class HistoryPageComponent implements OnInit {
  constructor(
    @Inject(CurrencyPersistentInterfaceServiceToken)
    private currencyPersistentService: CurrencyExchangePersistentService
  ) {}

  persistedExchanges?: CurrencyExchange[];

  ngOnInit(): void {
    this.persistedExchanges = this.currencyPersistentService.getAll();
  }
}
