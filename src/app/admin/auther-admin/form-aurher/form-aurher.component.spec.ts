import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAurherComponent } from './form-aurher.component';

describe('FormAurherComponent', () => {
  let component: FormAurherComponent;
  let fixture: ComponentFixture<FormAurherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAurherComponent]
    });
    fixture = TestBed.createComponent(FormAurherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
