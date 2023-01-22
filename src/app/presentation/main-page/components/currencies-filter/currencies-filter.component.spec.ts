import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrenciesFilter } from './currencies-filter.component';

describe('CurrenciesFilter', () => {
  let component: CurrenciesFilter;
  let fixture: ComponentFixture<CurrenciesFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesFilter ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event with the input value after 3000ms', (done) => {
    spyOn(component.filterEvent, 'emit');
    const input: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new InputEvent('input'));
    expect(component.filterEvent.emit).not.toHaveBeenCalled();
    setTimeout(() => {
        expect(component.filterEvent.emit).toHaveBeenCalledWith('test');
        done()
    }, 3100);
  });
});