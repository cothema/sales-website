import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverConsultationSectionComponent } from './cover-consultation-section.component';

describe('CoverOutsourcingComponent', () => {
  let component: CoverConsultationSectionComponent;
  let fixture: ComponentFixture<CoverConsultationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoverConsultationSectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverConsultationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
