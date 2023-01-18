import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAdapterService } from 'src/app/adapters/currency-adapter.service';
import { CurrencyApiStub } from 'src/app/adapters/test/currency-api.stub';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter-service.di.token';
import { CurrencyApiInterfaceToken } from 'src/app/injection-tokens/currency-api-service.di.token';
import { CurrenciesListComponent } from './currencies-list.component';
import { Currency } from 'src/app/models/currency.model';

describe(CurrenciesListComponent.name, () => {
  let fixture: ComponentFixture<CurrenciesListComponent>;
  let component: CurrenciesListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrenciesListComponent],
      providers: [
        {
          provide: CurrencyAdapterInterfaceToken,
          useClass: CurrencyAdapterService,
        },
        {
          provide: CurrencyApiInterfaceToken,
          useClass: CurrencyApiStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`${CurrenciesListComponent.prototype.currenciesList} should have the list of currencies, when the component inits`, (done) => {
    expect(component.currenciesList.length > 0).toBeTrue();
    done();
  });

  it(`${CurrenciesListComponent.prototype.setPaginatedList.name} should start with the paginated list of currencies`, () => {
    const listOfCurrencies: Currency[] = [
      {
        fullName: 'fake_1',
        acronym: 'fake_1',
      },
      {
        fullName: 'fake_2',
        acronym: 'fake_2',
      },
      {
        fullName: 'fake_3',
        acronym: 'fake_3',
      },
      {
        fullName: 'fake_4',
        acronym: 'fake_4',
      },
      {
        fullName: 'fake_5',
        acronym: 'fake_5',
      },
      {
        fullName: 'fake_6',
        acronym: 'fake_6',
      },
    ];

    component.currenciesList = listOfCurrencies;
    expect(component.currenciesListPaginated.length > 0).toBe(true);
  });

  it(`${CurrenciesListComponent.prototype.setPaginatedList.name} should do the paginated list of currencies`, () => {
    const listOfCurrencies: Currency[] = [
      {
        fullName: 'fake_1',
        acronym: 'fake_1',
      },
      {
        fullName: 'fake_2',
        acronym: 'fake_2',
      },
      {
        fullName: 'fake_3',
        acronym: 'fake_3',
      },
      {
        fullName: 'fake_4',
        acronym: 'fake_4',
      },
      {
        fullName: 'fake_5',
        acronym: 'fake_5',
      },
      {
        fullName: 'fake_6',
        acronym: 'fake_6',
      },
    ];

    component.currenciesList = listOfCurrencies;

    component.setPaginatedList();
    expect(component.currenciesListPaginated.length).toBe(5);

    component.currenciesCurrentPage = 1;
    component.setPaginatedList();
    expect(component.currenciesListPaginated.length).toBe(1);
  });
});
