import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'zen-date-select',
    templateUrl: './date-select.component.html',
    styleUrls: ['./date-select.component.scss'],
})

export class DateSelectComponent {

    @Input() public scheduleLength: number;
    @Input() public scheduleIndex: number;
    @Input() public amountToShow: number;
    @Output() public scheduleIndexChange = new EventEmitter<number>();

    constructor() { }

    onClickPrevious(): void {
        this.scheduleIndex--;
        this.scheduleIndexChange.emit(this.scheduleIndex);
    }

    onClickNext(): void {
        this.scheduleIndex++;
        this.scheduleIndexChange.emit(this.scheduleIndex);
    }
}
