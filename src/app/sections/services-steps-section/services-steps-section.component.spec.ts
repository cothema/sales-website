import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStepsSectionComponent } from './services-steps-section.component';

describe('ServicesStepsComponent', () => {
  let component: ServicesStepsSectionComponent;
  let fixture: ComponentFixture<ServicesStepsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesStepsSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStepsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
