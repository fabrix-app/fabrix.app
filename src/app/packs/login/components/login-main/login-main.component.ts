import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'

import { FormGroupState } from 'ngrx-forms'

import { FormValue } from '../../store/reducers/login-form'
import { Login } from '../../models/Login'

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginMainComponent implements OnInit {


  @Input() login: Login
  @Input() loginState: any
  @Input() loginFormState: FormGroupState<FormValue>

  @Output() resetForm: EventEmitter<Login> = new EventEmitter()
  @Output() submitForm: EventEmitter<Login> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
