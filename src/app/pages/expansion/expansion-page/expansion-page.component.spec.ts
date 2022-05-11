import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPageComponent } from './expansion-page.component';

describe('ExpansionComponent', () => {
  let component: ExpansionPageComponent;
  let fixture: ComponentFixture<ExpansionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
