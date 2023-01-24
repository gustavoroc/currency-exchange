import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { debounceTime, Subject } from "rxjs";

@Component({
    selector: 'app-currencies-filter',
    styleUrls: ['./currencies-filter.component.css'],
    templateUrl: './currencies-filter.component.html'
})
export class CurrenciesFilterComponent implements OnInit {
    @Output() filterEvent = new EventEmitter<string>();
    debouncer = new Subject<string>

    ngOnInit(): void {
        this.debouncer
                .pipe(debounceTime(300))
                .subscribe((value) => {
                    this.filterEvent.emit(value)
                })
    }

    emitFilteredValue(e: Event) {
        const inputValue = (e.target as HTMLInputElement).value
        this.debouncer.next(inputValue!)
    }
}