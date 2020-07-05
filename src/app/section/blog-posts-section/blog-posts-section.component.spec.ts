import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsSectionComponent } from './blog-posts-section.component';

describe('BlogPostsComponent', () => {
  let component: BlogPostsSectionComponent;
  let fixture: ComponentFixture<BlogPostsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostsSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
