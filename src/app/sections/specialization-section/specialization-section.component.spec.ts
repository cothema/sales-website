import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationSectionComponent } from './specialization-section.component';

describe('SpecializationSectionComponent', () => {
  let component: SpecializationSectionComponent;
  let fixture: ComponentFixture<SpecializationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
