import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAuthorsComponent } from './list-of-authors.component';

describe('ListOfAuthorsComponent', () => {
  let component: ListOfAuthorsComponent;
  let fixture: ComponentFixture<ListOfAuthorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfAuthorsComponent]
    });
    fixture = TestBed.createComponent(ListOfAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
