import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-view-by-month',
  templateUrl: './calendar-view-by-month.component.html',
  styleUrls: ['./calendar-view-by-month.component.css']
})
export class CalendarViewByMonthComponent implements OnInit {

  month : string;
  year: number;
  dayCounter: number;
  dayOffset: number;
  numOfDays: number;
  // #weeks-placeholder
  weeksPlaceHolder: HTMLElement; 


  DAY_NAMES: string[]   = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


  constructor() { }

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
        this.dayCounter++;
      }
      divFirstRowTextCenter.appendChild(divColDayDigits);
    }
    this.weeksPlaceHolder.appendChild(divFirstRowTextCenter);
    this.weeksPlaceHolder.appendChild(divRowWeekUnderline);

  }

  generateRestOfWeekRows(): void {
    var n = 1 + this.numOfDays;

    while ( this.dayCounter < n ) {
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
          this.dayCounter++;
        }
        divFirstRowTextCenter.appendChild(divColDayDigits);
      }
      this.weeksPlaceHolder.appendChild(divFirstRowTextCenter);
      this.weeksPlaceHolder.appendChild(divRowWeekUnderline);

      

    }
    
  }

}
