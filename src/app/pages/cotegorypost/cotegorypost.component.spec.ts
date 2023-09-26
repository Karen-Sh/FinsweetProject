import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotegorypostComponent } from './cotegorypost.component';

describe('CotegorypostComponent', () => {
  let component: CotegorypostComponent;
  let fixture: ComponentFixture<CotegorypostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotegorypostComponent]
    });
    fixture = TestBed.createComponent(CotegorypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
