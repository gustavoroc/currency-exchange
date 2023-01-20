import { NgModule } from '@angular/core';
import { CurrenciesListModule } from './components/currencies-list/currencies-list.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CurrenciesListModule],
})
export class MainPageModule {}
