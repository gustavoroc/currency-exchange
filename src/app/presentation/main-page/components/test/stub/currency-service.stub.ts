import { Observable, of } from 'rxjs';
import { Currency, CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyService } from 'src/app/usecases/currency-adapter-service.usecase';

export class CurrencyServiceStub implements CurrencyService {
  availableCurrencies(): Observable<Currency[]> {
    return of([
      { fullName: 'Dólar americano', acronym: 'USD' },
      { fullName: 'Euro', acronym: 'EUR' },
      { fullName: 'Iene japonês', acronym: 'JPY' },
      { fullName: 'Libra esterlina', acronym: 'GBP' },
      { fullName: 'Franco suíço', acronym: 'CHF' },
      { fullName: 'Dólar australiano', acronym: 'AUD' },
      { fullName: 'Dólar canadense', acronym: 'CAD' },
      { fullName: 'Dólar de Hong Kong', acronym: 'HKD' },
    ]);
  }
  normalizeExternalCurrencies(unnormalizedCurrencies: any): Currency[] {
    throw new Error('Method not implemented.');
  }
  calculateCurrencyExchange(
    from: string,
    to: string,
    value: number
  ): Observable<CurrencyExchange> {
    throw new Error('Method not implemented.');
  }
}
