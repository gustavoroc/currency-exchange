import { NgModule } from '@angular/core';
import { CurrencyPersistentInterfaceServiceToken } from 'src/app/injection-tokens/currency-persistent.service.di.token';
import { LocalStorageExchangeService } from './local-storage-exchange.service';

@NgModule({
  providers: [
    {
      provide: CurrencyPersistentInterfaceServiceToken,
      useClass: LocalStorageExchangeService,
    },
  ],
})
export class LocalStorageExchangeModule {}
