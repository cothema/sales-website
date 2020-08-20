import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsLogosListComponent } from './solutions-logos-list.component';

describe('SolutionsLogosListComponent', () => {
  let component: SolutionsLogosListComponent;
  let fixture: ComponentFixture<SolutionsLogosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsLogosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsLogosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
