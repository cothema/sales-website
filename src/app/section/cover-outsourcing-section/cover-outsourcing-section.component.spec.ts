import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverOutsourcingSectionComponent } from './cover-outsourcing-section.component';

describe('CoverOutsourcingComponent', () => {
  let component: CoverOutsourcingSectionComponent;
  let fixture: ComponentFixture<CoverOutsourcingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoverOutsourcingSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverOutsourcingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
