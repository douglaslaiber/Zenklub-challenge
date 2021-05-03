import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ProviderComponent } from '../components/provider/provider.component';
import { RatingStarComponent } from '../components/rating-star/rating-star.component';
import { DateOptionComponent } from '../components/schedule/components/date-option/date-option.component';
import { DateSelectComponent } from '../components/schedule/components/date-select/date-select.component';
import { TimeOptionComponent } from '../components/schedule/components/time-option/time-option.component';
import { TimeSelectComponent } from '../components/schedule/components/time-select/time-select.component';
import { ScheduleComponent } from '../components/schedule/schedule.component';

import { HomePage } from '../pages/home/home.page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        ScheduleComponent,
        DateSelectComponent,
        TimeSelectComponent,
        DateOptionComponent,
        TimeOptionComponent,
        ProviderComponent,
        RatingStarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
