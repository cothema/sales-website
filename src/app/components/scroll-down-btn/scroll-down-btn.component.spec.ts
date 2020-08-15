import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDownBtnComponent } from './scroll-down-btn.component';

describe('ScrollDownBtnComponent', () => {
  let component: ScrollDownBtnComponent;
  let fixture: ComponentFixture<ScrollDownBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollDownBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollDownBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
