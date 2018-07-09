import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

import { FormGroupState } from 'ngrx-forms'

import { FormValue } from '../../store/reducers/login-form'
import { Login } from '../../models/Login'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  @Input() hide: string[] = []

  @Input() login: Login
  @Input() loginState: any
  @Input() loginFormState: FormGroupState<FormValue>

  @Output() resetForm: EventEmitter<Login> = new EventEmitter()
  @Output() submitForm: EventEmitter<Login> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  hidden(item) {
    return this.hide.indexOf(item) > -1
  }

}
