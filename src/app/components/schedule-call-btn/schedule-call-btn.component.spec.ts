import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCallBtnComponent } from './schedule-call-btn.component';

describe('ScheduleCallBtnComponent', () => {
  let component: ScheduleCallBtnComponent;
  let fixture: ComponentFixture<ScheduleCallBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCallBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCallBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
