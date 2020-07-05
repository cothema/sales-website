import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsSectionComponent } from './contact-us-section.component';

describe('ContactUsComponent', () => {
  let component: ContactUsSectionComponent;
  let fixture: ComponentFixture<ContactUsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
