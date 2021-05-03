import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';

import { ISchedule } from '../../../../interfaces/provider';

@Component({
    selector: 'zen-date-option',
    templateUrl: './date-option.component.html',
    styleUrls: ['./date-option.component.scss'],
})
export class DateOptionComponent implements ControlValueAccessor, OnInit {

    @Input() public value: ISchedule;
    public modelValue: any;

    constructor(
        private ngControl: NgControl
    ) {
        ngControl.valueAccessor = this;
    }

    ngOnInit(): void {
        this.ngControl.control.valueChanges.subscribe(value => {
            if (this.modelValue === value) {
                return;
            }
            this.writeValue(value);
        });
    }

    onChange = (value: any) => { };
    onTouched = () => { };

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(value: any): void {
        this.modelValue = value;
    }

    select(): void {
        if (!this.modelValue || this.modelValue !== this.value) {
            this.modelValue = this.value;
            this.onChange(this.modelValue);
        }
    }

}
