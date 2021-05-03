import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { ITime } from '../../../../interfaces/provider';

@Component({
  selector: 'zen-time-option',
  templateUrl: './time-option.component.html',
  styleUrls: ['./time-option.component.scss']
})
export class TimeOptionComponent implements ControlValueAccessor, OnInit {

    @Input() value: ITime;
    modelValue: any;

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

    onChange = (value: any) => {};
    onTouched = () => {};

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
