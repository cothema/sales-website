import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesUniversityBannerComponent } from './sales-university-banner.component';

describe('SalesUniversityBannerComponent', () => {
  let component: SalesUniversityBannerComponent;
  let fixture: ComponentFixture<SalesUniversityBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesUniversityBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesUniversityBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
