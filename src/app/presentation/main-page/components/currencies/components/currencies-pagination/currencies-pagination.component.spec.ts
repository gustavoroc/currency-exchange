import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrenciesPaginationComponent } from './currencies-pagination.component';

describe('CurrenciesPaginationComponent', () => {
    let component: CurrenciesPaginationComponent;
    let fixture: ComponentFixture<CurrenciesPaginationComponent>;
  
    beforeEach(async () => {
      TestBed.configureTestingModule({
        declarations: [CurrenciesPaginationComponent]
      })
        .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CurrenciesPaginationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should increment currenciesCurrentPage when setPage is called with true', () => {
        component.currenciesCurrentPage = 0;
        component.setPage(true);
        expect(component.currenciesCurrentPage).toEqual(1);
    });

    it('should decrement currenciesCurrentPage when setPage is called with false', () => {
        component.currenciesCurrentPage = 2;
        component.setPage(false);
        expect(component.currenciesCurrentPage).toEqual(1);
    });

    it('should emit currenciesCurrentPageEvent with the current page when setPage is called', () => {
        spyOn(component.currenciesCurrentPageEvent, 'emit');
        component.setPage(true);
        expect(component.currenciesCurrentPageEvent.emit).toHaveBeenCalledWith(1);
    });

    it('should set currenciesPerPage when setCurrenciesPerPage is called', () => {
        component.setCurrenciesPerPage(5);
        expect(component.currenciesPerPage).toEqual(5);
    });

    it('should emit currenciesPerPageEvent with the number of currencies per page when setCurrenciesPerPage is called', () => {
        spyOn(component.currenciesPerPageEvent, 'emit');
        component.setCurrenciesPerPage(8);
        expect(component.currenciesPerPageEvent.emit).toHaveBeenCalledWith(8);
    });
});