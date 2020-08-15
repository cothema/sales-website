import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesConsultingSectionComponent } from './services-consulting-section.component';

describe('ServicesConsultingSectionComponent', () => {
  let component: ServicesConsultingSectionComponent;
  let fixture: ComponentFixture<ServicesConsultingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesConsultingSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesConsultingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
