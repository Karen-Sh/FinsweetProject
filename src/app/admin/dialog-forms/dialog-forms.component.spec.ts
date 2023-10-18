import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormsComponent } from './dialog-forms.component';

describe('DialogFormsComponent', () => {
  let component: DialogFormsComponent;
  let fixture: ComponentFixture<DialogFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogFormsComponent]
    });
    fixture = TestBed.createComponent(DialogFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
