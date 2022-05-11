import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLogosComponent } from './field-logos.component';

describe('FieldLogosComponent', () => {
  let component: FieldLogosComponent;
  let fixture: ComponentFixture<FieldLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
