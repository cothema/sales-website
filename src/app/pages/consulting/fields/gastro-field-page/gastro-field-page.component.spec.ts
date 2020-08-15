import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastroFieldPageComponent } from './gastro-field-page.component';

describe('GastroFieldPageComponent', () => {
  let component: GastroFieldPageComponent;
  let fixture: ComponentFixture<GastroFieldPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastroFieldPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastroFieldPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
