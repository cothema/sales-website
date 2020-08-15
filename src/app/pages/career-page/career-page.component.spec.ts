import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPageComponent } from './career-page.component';

describe('ForDealersComponent', () => {
  let component: CareerPageComponent;
  let fixture: ComponentFixture<CareerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CareerPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
