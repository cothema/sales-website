import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverSalesOutsourcingSectionComponent } from './cover-sales-outsourcing-section.component';

describe('CoverSalesOutsourcingSectionComponent', () => {
  let component: CoverSalesOutsourcingSectionComponent;
  let fixture: ComponentFixture<CoverSalesOutsourcingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverSalesOutsourcingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverSalesOutsourcingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
