import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDealersSectionComponent } from './for-dealers-section.component';

describe('ForDealersComponent', () => {
  let component: ForDealersSectionComponent;
  let fixture: ComponentFixture<ForDealersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForDealersSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDealersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
