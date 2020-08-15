import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfEthicsPageComponent } from './code-of-ethics-page.component';

describe('CodeOfEthicsComponent', () => {
  let component: CodeOfEthicsPageComponent;
  let fixture: ComponentFixture<CodeOfEthicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeOfEthicsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOfEthicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
