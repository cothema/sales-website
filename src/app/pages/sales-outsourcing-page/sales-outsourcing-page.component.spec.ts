import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOutsourcingPageComponent } from './sales-outsourcing-page.component';

describe('SalesOutsourcingPageComponent', () => {
  let component: SalesOutsourcingPageComponent;
  let fixture: ComponentFixture<SalesOutsourcingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOutsourcingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOutsourcingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
