import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseACatagoryComponent } from './choose-a-catagory.component';

describe('ChooseACatagoryComponent', () => {
  let component: ChooseACatagoryComponent;
  let fixture: ComponentFixture<ChooseACatagoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseACatagoryComponent]
    });
    fixture = TestBed.createComponent(ChooseACatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
