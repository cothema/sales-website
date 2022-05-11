import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSectionComponent } from './faq-section.component';

describe('FaqComponent', () => {
  let component: FaqSectionComponent;
  let fixture: ComponentFixture<FaqSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FaqSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
