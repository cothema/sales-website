import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceFieldPageComponent } from './ecommerce-field-page.component';

describe('EcommerceFieldPageComponent', () => {
  let component: EcommerceFieldPageComponent;
  let fixture: ComponentFixture<EcommerceFieldPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceFieldPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceFieldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
