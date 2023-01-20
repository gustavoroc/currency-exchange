import { TestBed } from '@angular/core/testing';

import { CurrencyAdapterService } from '../currency-adapter.service';
import { CurrencyApiStub } from './currency-api.stub';
import { Currency, CurrencyExchange } from 'src/app/models/currency.model';
import { CurrencyApiInterfaceToken } from 'src/app/injection-tokens/currency-api-service.di.token';

describe(CurrencyAdapterService.name, () => {
  let SUT: CurrencyAdapterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        CurrencyAdapterService,
        {
          provide: CurrencyApiInterfaceToken,
          useClass: CurrencyApiStub,
        },
      ],
    }).compileComponents();

    SUT = TestBed.inject(CurrencyAdapterService);
  });

  it(`${CurrencyAdapterService.prototype.availableCurrencies.name} should return the array of currencies model`, (done) => {
    SUT.availableCurrencies().subscribe((data) => {
      expect(data.length > 0).toBeTrue();
      done();
    });
  });

  it(`${CurrencyAdapterService.prototype.calculateCurrencyExchange.name}`, (done) => {
    const exchangeInformations: CurrencyExchange = {
      currencyFrom: 'USD',
      valueFrom: 50,
      currencyTo: 'EUR',
      valueTo: 46.174937,
      rate: 0.923499,
    };

    SUT.calculateCurrencyExchange('USD', 'EUR', 50).subscribe((data) => {
      expect(data).toEqual(exchangeInformations);
      done();
    });
  });
});
