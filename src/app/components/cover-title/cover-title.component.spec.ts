import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverTitleComponent } from './cover-title.component';

describe('CoverTitleComponent', () => {
  let component: CoverTitleComponent;
  let fixture: ComponentFixture<CoverTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
