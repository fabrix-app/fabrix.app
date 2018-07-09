import { Injectable, Optional, Inject } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import { catchError, map, switchMap, mergeMap, exhaustMap } from 'rxjs/operators'

import { defer } from 'rxjs/observable/defer'
import { tap } from 'rxjs/operators'

import { NgEngineService } from 'ng-engine'

import * as authActions from '../../../../core/store/actions/auth'
import * as loginActions from '../actions/login'

@Injectable()
export class LoginEffects {

  private _baseRef

  constructor(
    private _ngEngine: NgEngineService,
    private actions$: Actions
  ) {}
  // Dispatch just to let the console know we did
  @Effect({ dispatch: false }) init$: Observable<any> = defer(() => of(null)).pipe(
    tap(() => this._ngEngine.log('LoginEffects.init$', 'Login Effects Initiated')),
  )

  // Listen for the 'Collection Create' actions
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.ActionTypes.LOGIN),
    map((action: authActions.LoginSuccessAction) => action.payload),
    switchMap((payload) => {
      return of({type: '[Login] Login', payload: payload})
      // return new loginActions.LoginSuccessAction(payload)
    })
  )

  // Listen for the 'Collection Create' actions
  @Effect()
  loginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.ActionTypes.LOGIN_SUCCESS),
    map((action: authActions.LoginSuccessAction) => action.payload),
    switchMap((payload) => {
      this._ngEngine.log('Login Success', payload)
      return of({type: '[Login] Login Success', payload: payload})
      // return new loginActions.LoginSuccessAction(payload)
    })
  )

  // Listen for the 'Collection Create' actions
  @Effect()
  loginFailure$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.ActionTypes.LOGIN_FAILURE),
    map((action: authActions.LoginFailureAction) => action.payload),
    switchMap((payload) => {
      this._ngEngine.log('Login Failure', payload)
      return of({type: '[Login] Login Failure', payload: payload})
      // return new loginActions.LoginFailureAction(payload)
    })
  )
}
