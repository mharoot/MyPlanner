import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CalendarViewByYearComponent } from './calendar-view-by-year/calendar-view-by-year.component';
import { CalendarViewByMonthComponent } from './calendar-view-by-month/calendar-view-by-month.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewByYearComponent,
    CalendarViewByMonthComponent
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
