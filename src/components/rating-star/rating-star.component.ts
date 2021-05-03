import { Component, Input, OnInit } from '@angular/core';

import { IRating } from '../../interfaces/provider';

@Component({
    selector: 'zen-rating-star',
    templateUrl: './rating-star.component.html',
    styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent implements OnInit {

    @Input() rating: IRating;
    public stars = [1, 2, 3, 4, 5];

    constructor() { }

    ngOnInit(): void { }

}
