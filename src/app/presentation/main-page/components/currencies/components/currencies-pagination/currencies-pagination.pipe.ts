import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';


export interface paginationQuery {
    start: number,
    finish: number
}

@Pipe({
  name: 'paginateCurrencies'
})
export class PaginationPipe implements PipeTransform {

  transform(items: Currency[], query: paginationQuery): any[] {
    if(!items) return [];
    if(!query) return items;

    return items.slice(query.start, query.finish)
   }
}