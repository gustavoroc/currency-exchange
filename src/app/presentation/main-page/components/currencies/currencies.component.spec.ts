import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyAdapterInterfaceToken } from 'src/app/injection-tokens/currency-adapter.service.di.token';
import { CurrencyServiceStub } from '../test/stub/currency-service.stub';
import { CurrenciesComponent } from './currencies.component';
import { CurrenciesModule } from './currencies.module';

describe(CurrenciesComponent.name, () => {
  let fixture: ComponentFixture<CurrenciesComponent>;
  let component: CurrenciesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrenciesModule, BrowserAnimationsModule],
      providers: [
        {
          provide: CurrencyAdapterInterfaceToken,
          useClass: CurrencyServiceStub,
        },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrenciesComponent);
    component = fixture.componentInstance;
  });

  it('Should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('Should have the data from the service', () => {
    expect(component.dataSource.data.length).toBe(8);
  });

  it('Should filter the data based on the input field', () => {
    const event = new InputEvent('input');

    const input = (fixture.nativeElement as HTMLElement).querySelector(
      '#filter-currencies-input'
    ) as HTMLInputElement;

    input.value = 'USD';
    input?.dispatchEvent(event);

    fixture.detectChanges();

    const tableElement = (
      fixture.nativeElement as HTMLElement
    ).querySelectorAll('tr');

    expect(component.dataSource.filteredData[0].acronym).toBe('USD');
    expect(tableElement.length - 1).toBe(1);
  });

  it('Should select a currency when clicked', () => {
    fixture.detectChanges();
    const target = (fixture.nativeElement as HTMLElement)
      .querySelector('table')
      ?.querySelectorAll('tr')[1];

    target?.click();
    expect(component.selectedCurrency?.acronym).toBe('USD');
  });
});
