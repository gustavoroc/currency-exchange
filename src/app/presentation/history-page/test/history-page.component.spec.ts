import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyPersistentInterfaceServiceToken } from 'src/app/injection-tokens/currency-persistent.service.di.token';

import { CurrencyExchangePersistentService } from 'src/app/usecases/currency-persistent.service.usecase';
import { HistoryPageComponent } from '../history-page.component';
import { HistoryPageModule } from '../history-page.module';
import { exchanges } from './currencies-exchange.mock';
import { PersistentServiceStub } from './persistent-service.stub';

describe(HistoryPageComponent.name, () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;
  let service: CurrencyExchangePersistentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPageModule, BrowserAnimationsModule],
      providers: [
        {
          provide: CurrencyPersistentInterfaceServiceToken,
          useClass: PersistentServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject<any>(CurrencyPersistentInterfaceServiceToken);

    fixture.detectChanges();
  });

  it(`(D) ${HistoryPageComponent.prototype.persistedExchanges} should have the data to render the table of persistent exchanges when inits`, () => {
    // 5 tr por pagina, 1 tr do menu = 6
    expect(component.persistedExchanges).toEqual(exchanges);
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll('tr').length
    ).toBe(6);
  });

  it(`(D) ${HistoryPageComponent.prototype.paginator} should paginate`, () => {
    const paginator = component.paginator;
    paginator.nextPage();
    fixture.detectChanges();

    // 7 Registros, 5 por pagina; sobram 2 registros + 1 do titulo (tr) = 3tr's;
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll('tr').length
    ).toBe(3);
  });

  it(`(D) ${HistoryPageComponent.prototype.paginator} should change the page size`, () => {
    const paginator = component.paginator;
    paginator._changePageSize(10);
    fixture.detectChanges();

    // 7 Registros + 1 do titulo = 8
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll('tr').length
    ).toBe(8);
  });

  it(`(D) ${HistoryPageComponent.prototype.sort} should sort the table`, () => {
    const sort = component.sort;
    sort.active = 'valueTo';
    sort.direction = 'asc';
    sort.sortChange.emit(sort);
    fixture.detectChanges();
    const tableArr = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'tr'
    );
    const tableValue1 = parseInt(
      tableArr[1].querySelectorAll('td')[1].innerText
    );
    const tableValue2 = parseInt(
      tableArr[2].querySelectorAll('td')[1].innerText
    );
    expect(tableValue1).toBeLessThanOrEqual(tableValue2);
  });

  it(`(D) ${HistoryPageComponent} should have two currency exchange tagged with >10000k`, () => {
    const arrOfHigherThan10000k = (
      fixture.nativeElement as HTMLElement
    ).querySelectorAll('#isHigherThan10000k');

    expect(arrOfHigherThan10000k.length).toBe(2);
  });

  it(`(D) ${HistoryPageComponent} should delete a exchange currency and reflects in the UI`, () => {
    service.delete('2');
    service.delete('2');
    expect(component.persistedExchanges?.length).toBe(5);
  });
});
