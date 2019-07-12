import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewByMonthComponent } from './calendar-view-by-month.component';

describe('CalendarViewByMonthComponent', () => {
  let component: CalendarViewByMonthComponent;
  let fixture: ComponentFixture<CalendarViewByMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarViewByMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
