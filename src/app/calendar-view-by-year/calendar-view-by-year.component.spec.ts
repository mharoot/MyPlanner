import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewByYearComponent } from './calendar-view-by-year.component';

describe('CalendarViewByYearComponent', () => {
  let component: CalendarViewByYearComponent;
  let fixture: ComponentFixture<CalendarViewByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarViewByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
