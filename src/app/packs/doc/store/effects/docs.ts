import { Injectable, Optional, Inject } from '@angular/core'
import { NgEngineService } from 'ng-engine'

import { Action } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import {catchError, map } from 'rxjs/operators'

import { defer } from 'rxjs/observable/defer'
import { tap, switchMap, exhaustMap } from 'rxjs/operators'

import { EventsController } from '../../controllers/events.controller'

import {
  ActionTypes as EventActionTypes,
  SearchAction,
  SearchSuccessAction,
  SearchFailureAction,
  FindAllAction,
  FindAllSuccessAction,
  FindAllFailureAction
} from '../actions/docs'

@Injectable()
export class DocEventsEffects {

  constructor(
    private _ngEngine: NgEngineService,
    private _controller: EventsController,
    private actions$: Actions
  ) {}

  // Dispatch just to let the console know we did
  @Effect({dispatch: false}) init$: Observable<any> = defer(() => of(null)).pipe(
    tap(() => this._ngEngine.log('DocEventsEffects.init$', 'Doc Events Effects Initiated')),
  )

  // Listen for the 'Event Search' actions
  @Effect()
  eventSearch$: Observable<Action> = this.actions$.pipe(
    ofType(EventActionTypes.SEARCH),
    map((action: SearchAction) => action.payload),
    switchMap(payload => this._controller.search(payload).pipe(
      map(eventEntity => {
        this._ngEngine.log('Event Search', eventEntity)
        return new SearchSuccessAction(eventEntity)
      }),
      // If request fails, dispatch failed action
      catchError((err) => {
        this._ngEngine.log('Event Search Error', err)
        return of(new SearchFailureAction({error: err}))
      })
    ))
  )

  // Listen for the 'Event FindAll' actions
  @Effect()
  eventFindAll$: Observable<Action> = this.actions$.pipe(
    ofType(EventActionTypes.FIND_ALL),
    map((action: FindAllAction) => action.payload),
    switchMap(payload => this._controller.findAll(payload).pipe(
      map(eventEntity => {
        this._ngEngine.log('Event Find All', eventEntity)
        return new FindAllSuccessAction(eventEntity)
      }),
      // If request fails, dispatch failed action
      catchError((err) => {
        this._ngEngine.log('Event Find All Error', err)
        return of(new FindAllFailureAction({error: err}))
      })
    ))
  )

}
