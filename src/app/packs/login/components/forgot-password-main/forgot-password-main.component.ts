import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

import { FormGroupState } from 'ngrx-forms'

import { FormValue } from '../../store/reducers/forgot-password-form'
import { Login } from '../../models/Login'

@Component({
  selector: 'app-forgot-password-main',
  templateUrl: './forgot-password-main.component.html',
  styleUrls: ['./forgot-password-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordMainComponent implements OnInit {

  @Input() login: Login
  @Input() loginState: any
  @Input() forgotPasswordFormState: FormGroupState<FormValue>

  @Output() resetForm: EventEmitter<Login> = new EventEmitter()
  @Output() submitForm: EventEmitter<Login> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
