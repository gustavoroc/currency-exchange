import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrenciesTableComponent } from './currencies-table.component';
import { Currency } from 'src/app/models/currency.model';

describe('CurrenciesTableComponent', () => {
  let component: CurrenciesTableComponent;
  let fixture: ComponentFixture<CurrenciesTableComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedCurrency when selectCurrency is called', () => {
    const currency: Currency = {
        fullName: 'United States Dolar',
        acronym: 'USD'
    }
    component.selectCurrency(currency);
    expect(component.selectedCurrency).toEqual(currency);
  });

  it('should emit the selectedCurrency when selectCurrency is called', () => {
    spyOn(component.emitSelectedCurrency, 'emit');
    const currency: Currency = {
        fullName: 'United States Dolar',
        acronym: 'USD'
    }
    component.selectCurrency(currency);
    expect(component.emitSelectedCurrency.emit).toHaveBeenCalledWith(currency);
  });

  it('should set currenciesList when input is passed', () => {
    const currencies: Currency[] = [
        { fullName: 'Dollar', acronym: 'USD' },
        { fullName: 'Euro', acronym: 'EUR' },
        { fullName: 'Pound Sterling', acronym: 'GBP' },
        { fullName: 'Yen', acronym: 'JPY' },
        { fullName: 'Swiss Franc', acronym: 'CHF' },
        { fullName: 'Canadian Dollar', acronym: 'CAD' }
    ];
    component.currenciesList = currencies;
    fixture.detectChanges();
    expect(component.currenciesList).toEqual(currencies);
  });
});



