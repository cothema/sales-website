import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFieldsComponent } from './other-fields.component';

describe('OtherFieldsComponent', () => {
  let component: OtherFieldsComponent;
  let fixture: ComponentFixture<OtherFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
