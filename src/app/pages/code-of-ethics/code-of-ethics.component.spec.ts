import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfEthicsComponent } from './code-of-ethics.component';

describe('CodeOfEthicsComponent', () => {
  let component: CodeOfEthicsComponent;
  let fixture: ComponentFixture<CodeOfEthicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeOfEthicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOfEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
