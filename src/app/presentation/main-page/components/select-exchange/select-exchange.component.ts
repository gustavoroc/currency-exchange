import { Component, ElementRef, Input, Renderer2, ViewChild } from "@angular/core";
import { Currency } from "src/app/models/currency.model";

@Component({
    selector: 'app-select-exchange',
    templateUrl: './select-exchange.component.html'
})
export class SelectExchangeComponent {

    constructor(
        private renderer: Renderer2
    ) {}

    @ViewChild('modalBtn') modalBtn?: ElementRef;
    @Input() modalTarget?: string;
    @Input() selectedCurrency?: Currency;

    ngAfterViewInit() {
        this.renderer
        .setAttribute(this.modalBtn?.nativeElement,
            'data-bs-target',
            '#'+ this.modalTarget)
    }
}