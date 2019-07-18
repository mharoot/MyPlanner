// MOCK_DAY_EVENTS : boolean[] = [
//     false, false, false, true, false, false, false, false, false, false, false, false, false,
//     true, false, true, false, false, true, false, false, false, false, false, false, false, 
//     false, false, false, true
//   ];
import { CalendarEvent } from './calendar-event';

export const MOCK_CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 11, alert:'5 minutes before', allDay: false, ends:'Tue June 04 2019 10:30', location: 'Home', notes:"Interview w/ Reid Gormmley",repeat: 'Never', starts: 'Tue June 04 2019 10:00', title: 'Robert Half Recruiter', travelTime:'None', type: 'Phone Interview', url: null },
  { id: 12, alert:'15 minutes before', allDay: false, ends:'Thu July 04 2019 10:30', location: 'Home', notes:"Interview w/ Simon Grute",repeat: 'Never', starts: 'Thu July 04 2019 10:00', title: 'Robert Half Recruiter', travelTime:'None', type: 'Phone Interview', url: null },
  { id: 13, alert:'10 minutes before', allDay: false, ends:'Fri June 14 2019 10:30', location: 'Home', notes:"Interview w/ Chuck Phillips",repeat: 'Never', starts: 'Fri June 14 2019 10:00', title: 'Robert Half Recruiter', travelTime:'None', type: 'Phone Interview', url: null },
  { id: 14, alert:'30 minutes before', allDay: false, ends:'Mon June 24 2019 10:30', location: 'Home', notes:"Interview w/ Anthony Hamilton",repeat: 'Never', starts: 'Mon June 24 2019 10:00', title: 'Robert Half Recruiter', travelTime:'None', type: 'Phone Interview', url: null },
  { id: 15, alert:'1 hour before', allDay: false, ends:'Sun July 21 2019 13:30', location: 'Home', notes:"Interview w/ Jessica Lopez",repeat: 'Never', starts: 'Sun July 21 2019 14:00', title: 'Robert Half Recruiter', travelTime:'None', type: 'Phone Interview', url: null }
];
// Tues June 04 2019