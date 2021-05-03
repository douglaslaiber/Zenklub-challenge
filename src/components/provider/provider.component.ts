import { Component, Input, OnInit } from '@angular/core';

import { IProvider } from '../../interfaces/provider';

@Component({
    selector: 'zen-provider',
    templateUrl: './provider.component.html',
    styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

    @Input() public provider: IProvider;

    constructor() { }

    ngOnInit(): void { }

}
