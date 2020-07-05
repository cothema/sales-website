import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPartComponent } from './header-part.component';

describe('HeaderComponent', () => {
  let component: HeaderPartComponent;
  let fixture: ComponentFixture<HeaderPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
