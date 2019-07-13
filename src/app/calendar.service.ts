import { CalendarEvent } from './calendar-event';
import { MOCK_CALENDAR_EVENTS } from './mock-calendar-events';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  getCalendarEvents(): CalendarEvent[] {
    return MOCK_CALENDAR_EVENTS;
  }
}
