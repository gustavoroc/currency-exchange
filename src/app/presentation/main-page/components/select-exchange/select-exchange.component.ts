import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, filter, Subject } from 'rxjs';
import { Currency } from 'src/app/models/currency.model';
import { CurrenciesComponent } from '../currencies/currencies.component';

@Component({
  selector: 'app-select-exchange',
  templateUrl: './select-exchange.component.html',
  styleUrls: ['./select-exchange.component.css'],
})
export class SelectExchangeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @ViewChild('modalBtn') modalBtn?: ElementRef;
  @Input() modalTarget?: string;
  @Output() emitSelectedCurrency = new EventEmitter<Currency>();
  @Output() emitExchangeValue = new EventEmitter<{
    value: number;
    type: string;
  }>();
  selectedCurrency?: Currency;
  debounce = new Subject<number>();

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog
      .open(CurrenciesComponent, {
        enterAnimationDuration,
        exitAnimationDuration,
      })
      .afterClosed()
      .subscribe((result: Currency) => {
        this.selectedCurrency = result;
        this.emitSelectedCurrency.emit(result);
      });
  }

  ngOnInit() {
    this.debounce
      .pipe(
        filter((data) =>
          /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(data.toString())
        ),
        debounceTime(500)
      )
      .subscribe((inputValue) => {
        this.emitExchangeValue.emit({
          value: inputValue,
          type: this.modalTarget!,
        });
      });
  }

  dealWithInputExchangeEvent(e: Event) {
    const value = parseInt((e.target as HTMLInputElement).value);
    this.debounce.next(value);
  }
}
