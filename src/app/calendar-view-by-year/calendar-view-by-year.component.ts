import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-view-by-year',
  templateUrl: './calendar-view-by-year.component.html',
  styleUrls: ['./calendar-view-by-year.component.css']
})
export class CalendarViewByYearComponent implements OnInit {

  // page title
  title : string = "MyPlanner | View By Year";
  DAY_NAMES: string[]   = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  MONTH_NAMES: string[] = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
                            "Aug", "Sep", "Oct", "Nov", "Dec"];

  // This is the placeholder HTML Element of  all the years and months 
  calendarsContainer: HTMLElement; 

  constructor() { }

  // will not throw any error because it will render after template loading
  ngAfterViewInit() {
    this.calendarsContainer = document.getElementById("calendars-container");
    // init
    var today = new Date();

    var month               = today.getMonth(),    // 0-11
        year                = today.getFullYear(), // 2019
        this_month_date_end = new Date( year, month + 1, 0);

    this.createCalendar( this_month_date_end, 2021);

  }

  ngOnInit() {  
  }

  /**
   * Recursively creates a calendar passing the end of each month as the date.
   * 
   * @param date    - typicaly todays date new Date() or any date
   * @param endYear - the year you want the calendar to generate up until for January.
   * @param count   - every %2 of the count produces two col-6 elements.
   */
  createCalendar(date, endYear, count = 1) : void {
    var month         = date.getMonth(),    // 0-11
        year          = date.getFullYear(), // 2019
        endOfTheMonth = new Date( year, month + 1, 0);

    // end recursive calls
    if (year === endYear) return;

    var first_date = this.MONTH_NAMES[month] + " " + 1 + " " + year; 
    var tmp  = new Date(first_date).toDateString();          // Mon Jul 01 2019
    var first_day_of_month = tmp.substring(0,3);             // Mon - Sun
    var day_no = this.DAY_NAMES.indexOf(first_day_of_month); // 1
    var days   = date.getDate();                             // 31

    var calendar = this.getCalendar(day_no, days);

    var calendarContainerDiv = document.createElement('div'),
        calendarHeaderDiv    = document.createElement('div'),
        calendarMonthH3      = document.createElement('h3'),
        calendarMonthTxt     = document.createTextNode(this.MONTH_NAMES[month] + " " + year),
        calendarDatesDiv     = document.createElement('calendar-dates');
   
    calendarMonthH3.appendChild(calendarMonthTxt); 
    calendarDatesDiv.appendChild(calendar);
    calendarHeaderDiv.appendChild(calendarMonthH3);
    calendarContainerDiv.appendChild(calendarHeaderDiv);
    calendarContainerDiv.appendChild(calendarDatesDiv);


    calendarContainerDiv.className = "calendar-container";
    calendarHeaderDiv.className    = "calendar-header";
    calendarMonthH3.className      = "calendar-month";
    calendarDatesDiv.className     = "calendar-dates";

    /*
      add logic to know when to create this divRow or just divCol6 appending inside:
      this.calendarsContainer's last child to add just one more column using a counter
      rather than a whole object is much cleaner solution...
    <div class="row"> 
            <div class="col-6">
            calendarContainerDiv
    */

    // if its the first of the pair
    if ( count % 2 > 0 ) {
      // then create and append the divRow,containing the single col-6 element.
      var divRow  = document.createElement('div'), 
          divCol6 = document.createElement('div');
      divCol6.className = "col-6";
      divRow.className  = "row";

      divCol6.appendChild(calendarContainerDiv);
      divRow.appendChild(divCol6);
      this.calendarsContainer.appendChild(divRow);
      
    } else {
      // find the position to insert only the divCol6
      var lastRow = this.calendarsContainer.lastChild;
      var divCol6 = document.createElement('div');
      divCol6.className = "col-6";
      divCol6.appendChild(calendarContainerDiv);
      lastRow.appendChild(divCol6);
    }
    

    //TODO: ADD LOGIC FOR divRow or just divCol6 appending inside:
    // attach the calendar to the calendar place holder
    // this.calendarsContainer.appendChild(calendarContainerDiv);
    
    var next_month = month + 1;
    var next_month_date_end;

      // tail recursion to target date.
  if ( year < endYear ) {
    // var next_month_date_start;
    
    // if its Dec 
    if (next_month > 11) {
        // then next month is Jan of a New Year!
        next_month = 0;
        next_month_date_end   = new Date( year + 1, next_month + 1, 0);
        // next_month_date_start = new Date( year + 1, next_month, 1);
    } else {
        next_month_date_end   = new Date( year, next_month + 1, 0);
        // next_month_date_start = new Date( year, next_month, 1);
    }
    count++;
    this.createCalendar(next_month_date_end, endYear, count);
}

    

  }

 /**
  * Creates a calendar out of an html table
  * 
  * @param {int} day_no = 1 starting day of the month, helps begin the calendars offset for the day of the week
  * @param {int} days = 31 total days in month
  */
  getCalendar(day_no, days) : HTMLElement {
    var table = document.createElement("table");
    var tr    = document.createElement("tr");

    // row for the day letters 
    for(var c=0; c<=6; c++) {
        var td = document.createElement("td");
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    // create 2nd row - may or may not have an offset
    tr = document.createElement("tr");
    c: Number;
    for(c=0; c<=6; c++){
        if(c == day_no) {
            break;
        }
        var td = document.createElement("td");
        td.innerHTML = "";
        tr.appendChild(td);
    }

    var count = 1;
    for(; c<=6; c++) {
        var td = document.createElement("td");
        td.innerHTML = count+"";
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    // rest of the rows
    for(var r=3; r<=7; r++) {
        tr = document.createElement("tr");
        for(var c=0; c<=6; c++) {
            if ( count > days ) {
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement("td");
            td.innerHTML = count+"";
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    return table;
  }

  

}
