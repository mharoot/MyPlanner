import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../calendar-event';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar-view-by-month',
  templateUrl: './calendar-view-by-month.component.html',
  styleUrls: ['./calendar-view-by-month.component.css']
})
export class CalendarViewByMonthComponent implements OnInit {
  // The calendars current month
  month : string;
  // The calenders year
  year: number;
  // Help number the days of the calendar from 1 - 31
  dayCounter: number;
  // The number of days 
  dayOffset: number;
  // The number of possible days in Any of the 12 months
  numOfDays: number;
  // The div HTMLElement with the id attribute of '#weeks-placeholder'
  weeksPlaceHolder: HTMLElement; 
  // calendar events for all your events ever created
  calendarEvents: CalendarEvent[];
  // calendar events filtered by month and year you are currently on
  filteredCalendarEvents: CalendarEvent[];
  // 32 slots to make days 1-31 avaiable using eventDays to mark dots for events
  eventDays: boolean[] = [false, false, false, false, false, false, false, false,
    false, false, false, false,false, false, false, false,
    false, false, false, false,false, false, false, false,
    false, false, false, false,false, false, false, false];

  DAY_NAMES: string[]   = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  constructor(private calendarService:CalendarService) { }

  getCalendarEvents(): void {
    this.calendarEvents = this.calendarService.getCalendarEvents();
    this.month = this.month.charAt(0).toUpperCase() + this.month.slice(1);

    this.calendarEvents.forEach( calendarEvent => {
      console.log(calendarEvent);

      if ( calendarEvent.starts.indexOf(this.month) > -1 && 
           calendarEvent.starts.indexOf(this.year+"") > -1)
      {
        // this.filteredCalendarEvents.push(calendarEvent);
        this.eventDays[parseInt(calendarEvent.starts.split(" ")[2])] = true;

      }
    });

    // this.filteredCalendarEvents.forEach( calendarEvent => {
    //   this.eventDays[parseInt(calendarEvent.starts.split(" ")[2])] = true;
    // });
  }

  initCalendarProperties(): void {
    var str = window.location + "";
    var a = str.split('/');
    var n = a.length - 1;
    var key = a[n];
    if ( key != "calendar-view-by-month" )
    {
      // console.log(key); // Jun-30-6
      var m = key.split('-');
      this.month     = m[0];           // Jan - Dec 
      this.numOfDays = parseInt(m[1]); // 1-31
      this.dayOffset = parseInt(m[2]); // 0-6
      this.year      = parseInt(m[3]); // 2019
      this.dayCounter = 1;
      this.getCalendarEvents();
    }
  }

  ngOnInit() {
    this.initCalendarProperties();
    // console.log(this.month+"-"+this.numOfDays+"-"+this.dayOffset);
  }

  // will not throw any error because it will render after template loading
  ngAfterViewInit() {
    this.weeksPlaceHolder = document.getElementById('weeks-placeholder');
    this.generateFirstWeekRow();
    this.generateRestOfWeekRows();
   
  }

  /**
   * This accounts for the offset depending on what day of the week the month starts
   */
  generateFirstWeekRow(): void {
    var flagEventUnderline = false;
    var divFirstRowTextCenter = document.createElement('div'),
        divRowWeekUnderline   = document.createElement('div');

    divFirstRowTextCenter.className = "row text-center";
    divRowWeekUnderline.className   = "row week-underline";
    
    /*
            <div class="row text-center">
                <div class="col day-digits"></div>
                <div class="col day-digits"></div>
                <div class="col day-digits"></div>
                <div class="col day-digits"></div>
                <div class="col day-digits"></div>
                <div class="col day-digits"></div>
                <div class="col day-digits">1</div>
            </div>
            <div class="row week-underline"></div>
    */
    for (var i = 0; i < 7; i++) {
      var divColDayDigits = document.createElement('div');
      divColDayDigits.className = "col day-digits";

      if ( i >= this.dayOffset ) {
        divColDayDigits.innerHTML = ""+this.dayCounter;
        // now is there an event?
        if ( this.eventDays[this.dayCounter] ) {
          flagEventUnderline = true;
          divColDayDigits.innerHTML += '<br><svg class=\"event\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path id=\"ic_radio_button_checked_24px\" d=\"M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0-5A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z\" transform=\"translate(-2 -2)\"/></svg>'
        }
        this.dayCounter++;
      }
      divFirstRowTextCenter.appendChild(divColDayDigits);
    }
    // add event css if there is an event any day of the week
    if (flagEventUnderline) {
      divRowWeekUnderline.className += " event";
    }

    this.weeksPlaceHolder.appendChild(divFirstRowTextCenter);
    this.weeksPlaceHolder.appendChild(divRowWeekUnderline);

  }

  /**
   * This generates the rest of the rows for each week.
   */
  generateRestOfWeekRows(): void {
    var n = 1 + this.numOfDays;

    while ( this.dayCounter < n ) {
      var flagEventUnderline = false;
      var divFirstRowTextCenter = document.createElement('div'),
        divRowWeekUnderline   = document.createElement('div');

      divFirstRowTextCenter.className = "row text-center";
      divRowWeekUnderline.className   = "row week-underline";

      // generate days of the week
      for (var i = 0; i < 7; i++) {
        var divColDayDigits = document.createElement('div');
            divColDayDigits.className = "col day-digits";
        if (this.dayCounter < n) {
          divColDayDigits.innerHTML = ""+this.dayCounter;
          // now is there an event?
          if ( this.eventDays[this.dayCounter] ) {
            flagEventUnderline = true;
            divColDayDigits.innerHTML += '<br><svg class=\"event\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path id=\"ic_radio_button_checked_24px\" d=\"M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0-5A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z\" transform=\"translate(-2 -2)\"/></svg>'
          }
          this.dayCounter++;
        }
        divFirstRowTextCenter.appendChild(divColDayDigits);
      }
      // add event css if there is none on an event any day of the week
      if (flagEventUnderline)  {
        divRowWeekUnderline.className = "row week-underline event";
      }
      this.weeksPlaceHolder.appendChild(divFirstRowTextCenter);
      this.weeksPlaceHolder.appendChild(divRowWeekUnderline);

      

    }// end of while loop
    
  }

}