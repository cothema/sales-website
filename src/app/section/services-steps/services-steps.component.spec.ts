import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStepsComponent } from './services-steps.component';

describe('ServicesStepsComponent', () => {
  let component: ServicesStepsComponent;
  let fixture: ComponentFixture<ServicesStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesStepsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
