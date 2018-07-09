// Core/Common
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core'
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
import { FormValue as LoginFormValue } from '../../store/reducers/login-form'
import * as login from '../../store/actions/login'
import * as fromLogin from '../../store/reducers'
import * as loginForm from '../../store/actions/login-form'

import * as auth from '../../../../core/store/actions/auth'

// Models
import { Login } from '../../models/Login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public subscriptionDestroyed$ = new Subject<boolean>()

  public login$: Observable<Login>
  public loginState$: Observable<any>
  public loginFormState$: Observable<FormGroupState<LoginFormValue>>

  constructor(
    private _ngEngine: NgEngineService,
    private _store: Store<any>,
    private _router: Router
  ) {

    this.loginState$ = _store.pipe(select(fromLogin.getLoginLoginState))
    this.loginFormState$ = _store.pipe(select(fromLogin.getLoginLoginFormState))

    // const title = this._ngEngine.config.get('login.title')
    // this._store.dispatch(new login.HelloWorldAction(title))
    // this.loginState$ = this._store.pipe(select(fromLogin.getLoginState))
  }

  ngOnInit() {

  }

  public submitForm(user: Login): void {
    // Core Login
    this._store.dispatch(new auth.LoginAction(user))
  }

  public resetForm(user: Login): void {

  }
}
