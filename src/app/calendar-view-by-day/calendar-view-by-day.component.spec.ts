import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewByDayComponent } from './calendar-view-by-day.component';

describe('CalendarViewByDayComponent', () => {
  let component: CalendarViewByDayComponent;
  let fixture: ComponentFixture<CalendarViewByDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarViewByDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
