import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarViewByYearComponent } from './calendar-view-by-year/calendar-view-by-year.component';
import { CalendarViewByMonthComponent } from './calendar-view-by-month/calendar-view-by-month.component';
import { CalendarViewByDayComponent } from './calendar-view-by-day/calendar-view-by-day.component';

const routes: Routes = [
  { path: 'calendar-view-by-year', component: CalendarViewByYearComponent },
  { path: 'calendar-view-by-month', component: CalendarViewByMonthComponent },
  { path: 'calendar-view-by-month/:data', component: CalendarViewByMonthComponent },
  { path: 'calendar-view-by-day/:data', component: CalendarViewByDayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
