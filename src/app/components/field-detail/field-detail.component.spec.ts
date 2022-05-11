import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDetailComponent } from './field-detail.component';

describe('FieldDetailComponent', () => {
  let component: FieldDetailComponent;
  let fixture: ComponentFixture<FieldDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
