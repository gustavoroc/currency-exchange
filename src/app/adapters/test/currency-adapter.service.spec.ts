import { TestBed } from '@angular/core/testing';

import { CurrencyAdapterService } from '../currency-adapter.service';
import { CurrencyApiService } from '../../usecases/currency-api.service.usecase';
import { CurrencyApiStub } from './currency-api.stub';
import { Currency } from 'src/app/models/currency.model';
import { CurrencyApiInterfaceToken } from 'src/app/injection-tokens/currency-api-service.di.token';

describe(CurrencyAdapterService.name, () => {
  let SUT: CurrencyAdapterService;
  let currencyApiStub: CurrencyApiService;

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
    currencyApiStub = TestBed.inject<any>(CurrencyApiInterfaceToken);
  });

  it(`${CurrencyAdapterService.prototype.availableCurrencies.name} should return the array of currencies model`, (done) => {
    const currencies: Currency[] = [
      {
        fullName: 'Brazilian Real',
        acronym: 'BRL',
      },
      {
        fullName: 'United Arab Emirates Dirham',
        acronym: 'AED',
      },
    ];

    SUT.availableCurrencies().subscribe((data) => {
      expect(data).toEqual(currencies);
      done();
    });
  });
});
