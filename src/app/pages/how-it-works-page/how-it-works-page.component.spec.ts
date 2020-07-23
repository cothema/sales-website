import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksPageComponent } from './how-it-works-page.component';

describe('HowItWorksComponent', () => {
  let component: HowItWorksPageComponent;
  let fixture: ComponentFixture<HowItWorksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
