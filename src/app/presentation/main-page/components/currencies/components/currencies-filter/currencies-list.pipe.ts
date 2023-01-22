import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Pipe({
  name: 'filterCurrencies'
})
export class FilterPipe implements PipeTransform {

  transform(items: Currency[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase().trim();
    return items.filter( currency => {
      const condition_1 = currency.acronym.toLowerCase().includes(searchText)
      const condition_2 = currency.fullName.toLowerCase().includes(searchText)
      return condition_1 || condition_2
    });
   }
}