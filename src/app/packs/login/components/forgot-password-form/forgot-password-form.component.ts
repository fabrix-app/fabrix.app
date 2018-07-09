import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

import { FormGroupState } from 'ngrx-forms'

import { FormValue } from '../../store/reducers/forgot-password-form'
import { Login } from '../../models/Login'

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordFormComponent implements OnInit {
  @Input() hide: string[] = []

  @Input() login: Login
  @Input() loginState: any
  @Input() forgotPasswordFormState: FormGroupState<FormValue>

  @Output() resetForm: EventEmitter<Login> = new EventEmitter()
  @Output() submitForm: EventEmitter<FormValue> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  hidden(item) {
    return this.hide.indexOf(item) > -1
  }

}
