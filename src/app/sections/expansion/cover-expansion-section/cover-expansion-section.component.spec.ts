import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverExpansionSectionComponent } from './cover-expansion-section.component';

describe('CoverExpansionSectionComponent', () => {
  let component: CoverExpansionSectionComponent;
  let fixture: ComponentFixture<CoverExpansionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverExpansionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverExpansionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
