import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../calendar-event';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-view-by-day',
  templateUrl: './calendar-view-by-day.component.html',
  styleUrls: ['./calendar-view-by-day.component.css']
})
export class CalendarViewByDayComponent implements OnInit {

  // All calendar events for a user
  calendarEvents: CalendarEvent[] = [];
  // Filtered Calendar Events By Day
  filteredCalendarEvents: CalendarEvent[] = [];
  // window.location
  originSlug: string = "jun-30-6-2019";
  month: string = "June";
  day: string = "04";
  year: string = "2019";
  hours: string[] = [ 
    "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", 
    "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];

  constructor(private calendarService : CalendarService) { }

  ngOnInit() {
    this.calendarEvents = this.calendarService.getCalendarEvents();
    this.filterCalendarEventsByday();
  }

  ngAfterViewInit(): void {
    this.populateEvents();
  }

  filterCalendarEventsByday() : void {
    this.month = this.month.charAt(0).toUpperCase() + this.month.slice(1);

    this.calendarEvents.forEach( calendarEvent => {
      if ( calendarEvent.starts.indexOf(this.month) > -1 && 
           calendarEvent.starts.indexOf(this.year) > -1 &&
           calendarEvent.starts.indexOf(this.day) > -1 )
      {
        this.filteredCalendarEvents.push(calendarEvent);
      }
    });
  }

  populateEvents(): void {
    this.filteredCalendarEvents.forEach( calendarEvent => {
      // Sun July 21 2019 14:00 working with military time allows us
      // to use the javascript Date object with ease. 
      var starts = new Date(calendarEvent.starts),
          ends   = new Date(calendarEvent.ends);

      var seconds = (ends.getTime() - starts.getTime()) / 1000;
      var mins    = Math.floor(seconds / 60);
      var hours   = Math.floor(mins / 60);

      // console.log(hours + " hours and " + mins + " mins.")
      var eventHours = document.getElementById('event-hours');
      var childWalker = eventHours.firstChild;
      var n = starts.getHours(); // 00:00 - 24:00
      var i = -1; // this starts here because the first child is not an hour 
      // console.log(childWalker);
      // console.log(n);
      
      while ( childWalker != null && i < n ) {
        i++;
        childWalker = childWalker.nextSibling;
      }
      this.populateEventsHelper(childWalker);
    });
  }

 /**
  * Helps append events within a given hour.  
  * An hour can have multiple events.
  * 
<div class="row eventRow">
    <div class="col zero-min"></div>
    <div class="col fiveteen-min">Test from Robert Half, it is one hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div>
    <div class="col thirty-min">Test from Robert Half, it is one hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div>
    <div class="col fourty-five-min">Take a test from Robert Half, it is 1 hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div>
    <div class="col one-hour">Take a test from Robert Half, it is 1 hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div>
    <div class="col zero-min"></div>
</div>
  *
  * @param childWalker the event place holder's node location
  */
  private populateEventsHelper(childWalker) : void {
    var eventPlaceholder = childWalker.firstChild
    var htmlBody = '<div class="col fifteen-min" >Test from Robert Half, it is one hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div> <div class="col thirty-min">Test from Robert Half, it is one hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div><div class="col fourty-five-min">Take a test from Robert Half, it is 1 hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div><div class="col one-hour">Take a test from Robert Half, it is 1 hour timed Node Js test, testing for css html etc.  You will be speaking with Hillary Hamilton.</div>';
    var divRowEventRow = document.createElement('div');
    divRowEventRow.className = "row eventRow";
    divRowEventRow.innerHTML = '<div class="col zero-min"></div>'+htmlBody+'<div class="col zero-min"></div>';
    eventPlaceholder.appendChild(divRowEventRow);
  }
}
