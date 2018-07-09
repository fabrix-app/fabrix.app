import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import { defer } from 'rxjs/observable/defer'
import { catchError, exhaustMap, map, tap, take, startWith, switchMap } from 'rxjs/operators'

import { NgEngineService } from 'ng-engine'

import {
  ActionTypes,
  LoginAction,
  LoginFailureAction,
  LoginSuccessAction,
  LogoutAction,
  LogoutSuccessAction,
  LogoutFailureAction,
  RecoverAction,
  RecoverSuccessAction,
  RecoverFailureAction,
  SessionAction,
  SessionSuccessAction,
  SessionFailureAction
} from '../actions/auth'

import { Authenticate } from '../../models/Authenticate'
import { AuthService } from '../../services/auth/auth.service'
import { Store } from '@ngrx/store'

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _router: Router,
    private _ngEngine: NgEngineService,
    private _store: Store<any>
  ) {}

  /**
   *
   */
  @Effect()
  session$ = this.actions$.pipe(
    ofType<SessionAction>(ActionTypes.SESSION),
    map(action => action),
    exhaustMap((auth) =>
      this._authService
        .session(auth)
        .pipe(
          map(user => new SessionSuccessAction(user)),
          catchError(error => of(new SessionFailureAction({error: error})))
        )
    )
  )

  /**
   *
   */
  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginAction>(ActionTypes.LOGIN),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this._authService
        .login(auth)
        .pipe(
          map(user => new LoginSuccessAction(user)),
          catchError(error => of(new LoginFailureAction({error: error})))
        )
    )
  )

  /**
   *
   */
  @Effect()
  logout$ = this.actions$.pipe(
    ofType<LogoutAction>(ActionTypes.LOGOUT),
    map(action => true),
    exhaustMap((auth: Boolean) =>
      this._authService
        .logout()
        .pipe(
          map(user => new LogoutSuccessAction()),
          catchError(error => of(new LogoutFailureAction({error: error})))
        )
    )
  )

  /**
   *
   */
  @Effect({ dispatch: false })
  logoutSuccess$ = this.actions$.pipe(
    ofType<LogoutSuccessAction>(ActionTypes.LOGOUT_SUCCESS),
    tap(() => this._router.navigate(['/login']))
  )

  /**
   *
   */
  @Effect()
  recover$ = this.actions$.pipe(
    ofType<RecoverAction>(ActionTypes.RECOVER),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this._authService
        .recover(auth)
        .pipe(
          map(user => new RecoverSuccessAction({ user })),
          catchError(error => of(new RecoverFailureAction({error: error})))
        )
    )
  )

  /**
   *
   */
  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccessAction>(ActionTypes.LOGIN_SUCCESS),
    tap(() => this._router.navigate(['/']))
  )

  /**
   *
   */
  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(ActionTypes.LOGIN_REDIRECT, ActionTypes.LOGOUT),
    tap((auth) => {
      this._router.navigate(['/login'])
    })
  )

  /**
   *
   */
  @Effect({ dispatch: false })
  homeRedirect$ = this.actions$.pipe(
    ofType(ActionTypes.HOME_REDIRECT),
    tap((auth) => {
      this._router.navigate(['/'])
    })
  )
}
