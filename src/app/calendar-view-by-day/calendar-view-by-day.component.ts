import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-view-by-day',
  templateUrl: './calendar-view-by-day.component.html',
  styleUrls: ['./calendar-view-by-day.component.css']
})
export class CalendarViewByDayComponent implements OnInit {

  originSlug: string = "jun-30-6-2019";
  month: string = "June";
  hours: string[] = [ 
    "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", 
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];
    
  constructor() { }

  ngOnInit() {
  }

}
