// MOCK_DAY_EVENTS : boolean[] = [
//     false, false, false, true, false, false, false, false, false, false, false, false, false,
//     true, false, true, false, false, true, false, false, false, false, false, false, false, 
//     false, false, false, true
//   ];
import { CalendarEvent } from './calendar-event';

export const MOCK_CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 11, alert:'5 minutes before', allDay: false, ends:'Tue June 04 2019 10:30am', location: 'Home', notes:"Interview w/ Reid Gormmley",repeat: 'Never', starts: 'Tue June 04 2019 10:00am', title: 'Robert Half Recruiter', travelTime:'None', type: 'Phone Interview', url: null },
  { id: 12, alert:'15 minutes before', allDay: false, ends:'Thu July 04 2019 10:30am', location: 'Home', notes:"Interview w/ Simon Grute",repeat: 'Never', starts: 'Thu July 04 2019 10:00am', title: 'Robert Half Recruiter', travelTime:'None', type: 'Phone Interview', url: null }
];
// Tues June 04 2019