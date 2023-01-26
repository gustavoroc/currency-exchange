import { Component, ElementRef, Inject, Input } from '@angular/core';
import { CurrencyPersistentInterfaceServiceToken } from 'src/app/injection-tokens/currency-persistent.service.di.token';
import { CurrencyExchangePersistentService } from 'src/app/usecases/currency-persistent.service.usecase';

@Component({
  selector: 'app-delete-exchange-modal',
  templateUrl: './delete-exchange-modal.component.html',
})
export class DeleteExchangeModal {
  @Input() currencyId?: string;
  @Input() closeModalBtn?: HTMLElement;

  constructor(
    @Inject(CurrencyPersistentInterfaceServiceToken)
    private currencyPersistentService: CurrencyExchangePersistentService
  ) {}

  deletePersistedExchange() {
    if (this.currencyId) {
      this.currencyPersistentService.delete(this.currencyId);
    }
    this.closeModalBtn?.click();
  }
}
