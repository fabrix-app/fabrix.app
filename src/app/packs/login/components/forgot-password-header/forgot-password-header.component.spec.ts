import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordHeaderComponent } from './forgot-password-header.component';

describe('ForgotPasswordHeaderComponent', () => {
  let component: ForgotPasswordHeaderComponent;
  let fixture: ComponentFixture<ForgotPasswordHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
