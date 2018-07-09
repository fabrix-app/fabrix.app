import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordMainComponent } from './forgot-password-main.component';

describe('ForgotPasswordMainComponent', () => {
  let component: ForgotPasswordMainComponent;
  let fixture: ComponentFixture<ForgotPasswordMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
