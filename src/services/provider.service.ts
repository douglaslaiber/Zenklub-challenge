import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { IProvider } from '../interfaces/provider';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
    providedIn: 'root'
})
export class ProviderService {

    constructor(
        private httpClient: HttpClient
    ) { }

    get(): Observable<IProvider> {
        const options = { headers };
        return this.httpClient.get<IProvider>(environment.api_url, options);
    }

}
