import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSectionComponent } from './about-us-section.component';

describe('AboutUsComponent', () => {
  let component: AboutUsSectionComponent;
  let fixture: ComponentFixture<AboutUsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
