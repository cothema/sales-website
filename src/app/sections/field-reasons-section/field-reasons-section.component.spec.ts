import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldReasonsSectionComponent } from './field-reasons-section.component';

describe('FieldReasonsSectionComponent', () => {
  let component: FieldReasonsSectionComponent;
  let fixture: ComponentFixture<FieldReasonsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldReasonsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldReasonsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
