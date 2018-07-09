// Common / Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'

// NgEngine
import { NgEngineService } from 'ng-engine'

// RxJS
import { Observable } from 'rxjs'
import { Subject } from 'rxjs'
import { takeUntil, tap, map, take, switchMap, exhaustMap } from 'rxjs/operators'

// NGRX
import { Store, select } from '@ngrx/store'
import { FormGroupState, SetValueAction } from 'ngrx-forms'
import { Actions, ofType } from '@ngrx/effects'
import { FormValue as ForgotPasswordFormValue } from '../../store/reducers/forgot-password-form'
import * as login from '../../store/actions/login'
import * as fromLogin from '../../store/reducers'
import * as loginForm from '../../store/actions/login-form'

import * as auth from '../../../../core/store/actions/auth'

// Models
import { Login } from '../../models/Login'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {

  public subscriptionDestroyed$ = new Subject<boolean>()

  public login$: Observable<Login>
  public loginState$: Observable<any>
  public forgotPasswordFormState$: Observable<FormGroupState<ForgotPasswordFormValue>>

  constructor(
    private _ngEngine: NgEngineService,
    private _store: Store<any>,
    private _router: Router
  ) {

    this.loginState$ = _store.pipe(select(fromLogin.getLoginLoginState))
    this.forgotPasswordFormState$ = _store.pipe(select(fromLogin.getLoginForgotPasswordFormState))
  }

  ngOnInit() {

  }

  public submitForm(user: Login): void {
    // Core Login
    this._store.dispatch(new auth.RecoverAction(user))
  }

  public resetForm(user: Login): void {

  }

}
