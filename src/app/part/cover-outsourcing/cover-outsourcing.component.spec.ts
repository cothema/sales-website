import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverOutsourcingComponent } from './cover-outsourcing.component';

describe('CoverOutsourcingComponent', () => {
  let component: CoverOutsourcingComponent;
  let fixture: ComponentFixture<CoverOutsourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverOutsourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverOutsourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
