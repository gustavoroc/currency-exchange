import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-select-exchange',
  templateUrl: './select-exchange.component.html',
})
export class SelectExchangeComponent {
  constructor(private renderer: Renderer2) {}

  @ViewChild('modalBtn') modalBtn?: ElementRef;
  @Input() modalTarget?: string;
  @Output() emitSelectedCurrency = new EventEmitter<Currency>();
  @Output() emitExchangeValue = new EventEmitter<{
    value: number;
    type: string;
  }>();
  selectedCurrency?: Currency;

  ngAfterViewInit() {
    this.renderer.setAttribute(
      this.modalBtn?.nativeElement,
      'data-bs-target',
      '#' + this.modalTarget
    );
  }

  dealWithInputExchangeEvent(e: Event) {
    const value = parseInt((e.target as HTMLInputElement).value);
    this.emitExchangeValue.emit({
      value,
      type: this.modalTarget!,
    });
  }

  dealWithSelectedCurrencyEvent(currency: Currency) {
    this.selectedCurrency = currency;
    this.emitSelectedCurrency.emit(currency);
  }
}
