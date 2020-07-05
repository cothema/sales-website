import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDealersPageComponent } from './for-dealers-page.component';

describe('ForDealersComponent', () => {
  let component: ForDealersPageComponent;
  let fixture: ComponentFixture<ForDealersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForDealersPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDealersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
