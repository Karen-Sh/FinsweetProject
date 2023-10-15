import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherAdminComponent } from './auther-admin.component';

describe('AutherAdminComponent', () => {
  let component: AutherAdminComponent;
  let fixture: ComponentFixture<AutherAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutherAdminComponent]
    });
    fixture = TestBed.createComponent(AutherAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
