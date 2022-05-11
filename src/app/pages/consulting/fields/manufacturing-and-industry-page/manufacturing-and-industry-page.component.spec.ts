import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingAndIndustryPageComponent } from './manufacturing-and-industry-page.component';

describe('ManufacturingAndIndustryComponent', () => {
  let component: ManufacturingAndIndustryPageComponent;
  let fixture: ComponentFixture<ManufacturingAndIndustryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturingAndIndustryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturingAndIndustryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
