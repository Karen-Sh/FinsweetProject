import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutListOfAuthersComponent } from './about-list-of-authers.component';

describe('AboutListOfAuthersComponent', () => {
  let component: AboutListOfAuthersComponent;
  let fixture: ComponentFixture<AboutListOfAuthersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutListOfAuthersComponent]
    });
    fixture = TestBed.createComponent(AboutListOfAuthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
