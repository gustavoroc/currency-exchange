import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { debounceTime, filter, Subject } from 'rxjs';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-select-exchange',
  templateUrl: './select-exchange.component.html',
  styleUrls: ['./select-exchange.component.css'],
})
export class SelectExchangeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  @ViewChild('modalBtn') modalBtn?: ElementRef;
  @Input() modalTarget?: string;
  @Output() emitSelectedCurrency = new EventEmitter<Currency>();
  @Output() emitExchangeValue = new EventEmitter<{
    value: number;
    type: string;
  }>();
  selectedCurrency?: Currency;
  debounce = new Subject<number>();

  ngAfterViewInit() {
    this.renderer.setAttribute(
      this.modalBtn?.nativeElement,
      'data-bs-target',
      '#' + this.modalTarget
    );
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

  dealWithSelectedCurrencyEvent(currency: Currency) {
    this.selectedCurrency = currency;
    this.emitSelectedCurrency.emit(currency);
  }
}
