import { Injectable} from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Actions, ofType } from '@ngrx/effects'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { filter, take, map, tap, catchError, switchMap, exhaustMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

import * as fromEvents from '../store/reducers'
import { eventsActions } from '../store/actions'

import { EventsController } from '../controllers/events.controller'

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class EventsGuard implements CanActivate {
  constructor(
    private _store: Store<fromEvents.State>,
    private _controller: EventsController,
    private _actions$: Actions,
    private _router: Router
  ) {}

  /**
   * This method creates an observable that waits for the `loaded` property
   * of the event state to turn `true`, emitting one time once loading
   * has finished.
   */
  waitForEventsToLoad(): Observable<boolean> {
    return this._store.pipe(
      select(fromEvents.getEventsLoading),
      filter(loaded => !loaded),
      take(1)
    )
  }

  /**
   * This method checks if events in the store with the given params are already registered
   * in the Store
   */
  hasEventsInStore(queryParams): Observable<boolean> {
    return this._store.pipe(
      select(fromEvents.getEventsEntities),
      exhaustMap(entities => this.loadEvents(entities, queryParams)),
      take(1)
    )
  }

  // TODO Match params instead of length
  loadEvents(entities, queryParams) {
    return this._store.pipe(
      select(fromEvents.getEventsPagination),
      exhaustMap(pagination => {
        console.log('COMPARE', pagination, queryParams)
        return of(Object.keys(entities).length > 0)
      }),
      take(1)
    )
  }

  /**
   * This method loads a event with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
  hasEventsInApi(queryParams): Observable<boolean> {
    return this.dispatchFindAllAction(queryParams).pipe(
      map(dispatched => this.waitForEventsToLoad()),
      exhaustMap(loaded => this.hasEventsInStore(queryParams)),
      take(1)
    )
  }

  /**
   * `hasEvent` composes `hasEventInStore` and `hasEventAccountInApi`. It first checks
   * if the event is in store, and if not it then checks if it is in the
   * API.
   */
  hasEvent(queryParams): Observable<boolean> {
    return this.hasEventsInStore(queryParams).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore)
        }
        return this.hasEventsInApi(queryParams)
      }),
      take(1)
    )
  }

  /**
   * This method dispatches the find all action which will be picked up by the effects
   */
  dispatchFindAllAction(query): Observable<boolean> {
    return of(!!this._store.dispatch(new eventsActions.FindAllAction(query)))
  }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the event to load, then it checks if we need
   * to request a event from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will still return an Observable of `true`, for a possible eempty list
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const params = Object.assign({}, route.data['events'] || {}, route.queryParams)
    return this.waitForEventsToLoad().pipe(
      switchMap(() => this.hasEvent(params)),
      switchMap(isFound => {
        console.log('IS FOUND', isFound)
        return of(true)
      }),
      take(1)
    )
  }
}
