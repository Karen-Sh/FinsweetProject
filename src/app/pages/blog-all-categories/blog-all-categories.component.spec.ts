import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAllCategoriesComponent } from './blog-all-categories.component';

describe('BlogAllCategoriesComponent', () => {
  let component: BlogAllCategoriesComponent;
  let fixture: ComponentFixture<BlogAllCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAllCategoriesComponent]
    });
    fixture = TestBed.createComponent(BlogAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
