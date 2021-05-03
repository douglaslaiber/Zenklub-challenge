import { Component, Input, OnInit } from '@angular/core';

import { ISchedule, ITime } from '../../interfaces/provider';

@Component({
    selector: 'zen-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    @Input() scheduleList: Array<ISchedule>;

    public scheduleSelected: ISchedule;
    public scheduleIndex = 0;
    public amountToShow = 5;
    public timeSelected: ITime;
    public date: any;
    public time: any;

    constructor() { }

    ngOnInit(): void {
        this.scheduleSelected = this.scheduleList[0];
    }

    onScheduleIndexChange(index: number): void {
        this.scheduleIndex = index;
    }

}
