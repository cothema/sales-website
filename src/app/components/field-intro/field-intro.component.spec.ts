import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldIntroComponent } from './field-intro.component';

describe('FieldIntroComponent', () => {
  let component: FieldIntroComponent;
  let fixture: ComponentFixture<FieldIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
