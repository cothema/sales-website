import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDealersComponent } from './for-dealers.component';

describe('ForDealersComponent', () => {
  let component: ForDealersComponent;
  let fixture: ComponentFixture<ForDealersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForDealersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
