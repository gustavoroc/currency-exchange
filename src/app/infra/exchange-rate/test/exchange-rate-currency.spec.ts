import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ExchangeRateCurrencyService } from '../exchange-rate-currency.service';
import { environment } from 'src/environments/environment';

import mockedAllSymbols from './mocks/all-symbols.mock.json';
import mockedCurrencyExchange from './mocks/currency-exchange.mock.json';

import allSymbolsResponse from './mocks/fixtures/all-symbols-response.fixture.json';
import currencyExchangeResponse from './mocks/fixtures/currency-exchange-response.fixture.json';

describe(ExchangeRateCurrencyService.name, () => {
  let SUT: ExchangeRateCurrencyService;
  let mockedHttpClient: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExchangeRateCurrencyService],
    }).compileComponents();

    SUT = TestBed.inject(ExchangeRateCurrencyService);
    mockedHttpClient = TestBed.inject(HttpTestingController);
  });

  it(`${ExchangeRateCurrencyService.prototype.getAllSymbols.name} should return all the symbols supported by the API`, (done) => {
    SUT.getAllSymbols().subscribe((data) => {
      expect(data).toEqual(mockedAllSymbols);
      done();
    });

    mockedHttpClient
      .expectOne(`${environment.API_URL}/symbols`)
      .flush(allSymbolsResponse);
  });

  it(`${ExchangeRateCurrencyService.prototype.convertExchange.name} should return all the data based on a exchange query`, (done) => {
    const currenciesToBeConverted = {
      from: 'EUR',
      to: 'USD',
      amount: 50,
    };

    SUT.convertExchange('EUR', 'USD', 50).subscribe((data) => {
      expect(data.result).toEqual(mockedCurrencyExchange.result);
      done();
    });

    mockedHttpClient
      .expectOne(
        `${environment.API_URL}/convert?from=${currenciesToBeConverted.from}&to=${currenciesToBeConverted.to}&amount=${currenciesToBeConverted.amount}`
      )
      .flush(currencyExchangeResponse);
  });
});
