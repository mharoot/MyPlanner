import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CalendarViewByYearComponent } from './calendar-view-by-year/calendar-view-by-year.component';
import { CalendarViewByMonthComponent } from './calendar-view-by-month/calendar-view-by-month.component';
import { CalendarViewByDayComponent } from './calendar-view-by-day/calendar-view-by-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewByYearComponent,
    CalendarViewByMonthComponent,
    CalendarViewByDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
