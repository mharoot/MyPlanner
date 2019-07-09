import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarViewByYearComponent } from './calendar-view-by-year/calendar-view-by-year.component';

const routes: Routes = [
  { path: 'calendar-view-by-year', component: CalendarViewByYearComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
