import { Injectable, Optional, Inject } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Action, Store, select} from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import {catchError, map, mergeMap, take, takeUntil} from 'rxjs/operators'

import { defer } from 'rxjs/observable/defer'
import { tap, switchMap, exhaustMap } from 'rxjs/operators'

import { NgEngineService } from 'ng-engine'

import * as fromLogin from '../reducers'
import { loginActions, loginFormActions } from '../actions'

import { ClearAsyncErrorAction, SetAsyncErrorAction, StartAsyncValidationAction } from 'ngrx-forms'


@Injectable()
export class LoginFormEffects {

  constructor(
    private _ngEngine: NgEngineService,
    private _store: Store<any>,
    private actions$: Actions
  ) {}
  // Dispatch just to let the console know we did
  @Effect({ dispatch: false }) init$: Observable<any> = defer(() => of(null)).pipe(
    tap(() => this._ngEngine.log('LoginFormEffects.init$', 'Login Form Initiated')),
  )

  @Effect()
  savingStarted$: Observable<Action> = this.actions$.pipe(
    ofType(loginActions.ActionTypes.LOGIN),
    map(login => new StartAsyncValidationAction('loginForm', 'authorizing')),
    tap((action: any) => this._store.dispatch(action))
  )

  @Effect()
  savingComplete$: Observable<Action> = this.actions$.pipe(
    ofType(
      loginActions.ActionTypes.LOGIN_SUCCESS,
      loginActions.ActionTypes.LOGIN_FAILURE
    ),
    map(login => new ClearAsyncErrorAction('loginForm', 'authorizing')),
    tap((action: any) => {
      this._ngEngine.log('Effect: login-form ACTION', action)
      return this._store.dispatch(action)
    })
  )
}
