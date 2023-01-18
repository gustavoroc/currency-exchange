import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyAdapterService } from 'src/app/adapters/currency-adapter.service';
import { CurrencyApiStub } from 'src/app/adapters/test/currency-api.stub';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter-service.di.token';
import { CurrencyApiInterfaceToken } from 'src/app/injection-tokens/currency-api-service.di.token';
import { CurrenciesListComponent } from './currencies-list.component';

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
    component.currenciesList?.subscribe((currenciesList) => {
      expect(currenciesList.length > 0).toBeTrue();
      done();
    });
  });
});
