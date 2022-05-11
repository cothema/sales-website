import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalespeopleAndConsultantsPageComponent } from './salespeople-and-consultants-page.component';

describe('SalespeopleAndConsultantsComponent', () => {
  let component: SalespeopleAndConsultantsPageComponent;
  let fixture: ComponentFixture<SalespeopleAndConsultantsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalespeopleAndConsultantsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalespeopleAndConsultantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
