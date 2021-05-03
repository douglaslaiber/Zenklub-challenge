import { Component, OnInit } from '@angular/core';

import { IProvider } from '../../interfaces/provider';
import { ProviderService } from '../../services/provider.service';

@Component({
    selector: 'zen-home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

    public provider: IProvider;

    constructor(
        private providerService: ProviderService
    ) { }

    ngOnInit(): void {
        this.getProvider();
    }

    getProvider(): void {
        this.providerService.get().subscribe(provider => this.provider = provider);
    }

}
