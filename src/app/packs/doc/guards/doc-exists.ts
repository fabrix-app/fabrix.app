import { Injectable } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'
import { filter, take, map, tap, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

import { DocsController } from '../controllers/docs.controller'

import {
  State,
  getDocsLoaded,
  getDocsEntities
} from '../store/reducers'
import { docsActions } from '../store/actions'

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */

@Injectable()
export class DocExistsGuard implements CanActivate {
  constructor(
    private _store: Store<State>,
    private _router: Router,
    private _controller: DocsController
  ) {}

  /**
   * This method creates an observable that waits for the `loaded` property
   * of the docs state to turn `true`, emitting one time once loading
   * has finished.
   */
  waitForDocsToLoad(): Observable<boolean> {
    return this._store.pipe(
      select(getDocsLoaded),
      filter(loaded => !!loaded),
      take(1)
    )
  }

  /**
   * This method will load the cached doc as the selected doc
   */
  loadDoc(id: string) {
    return this._store.pipe(
      select(getDocsEntities),
      map(entities => new docsActions.LoadAction(entities[id])),
      tap((action: docsActions.LoadAction) => this._store.dispatch(action)),
      map((action: docsActions.LoadAction) => !!action.payload),
      take(1)
    )
  }

  /**
   * This method checks if a doc with the given ID is already registered
   * in the Store
   */
  hasDocInStore(id: string): Observable<boolean> {
    return this._store.pipe(
      select(getDocsEntities),
      map(entities => !!entities[id]),
      take(1)
    )
  }

  /**
   * This method loads a doc with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
  hasDocInApi(id: string): Observable<boolean> {
    return this._controller.findOne(id).pipe(
      map(docEntity => new docsActions.LoadAction(docEntity)),
      tap((action: docsActions.LoadAction) => this._store.dispatch(action)),
      map(doc => !!doc),
      catchError(() => {
        return of(false)
      })
    )
  }

  /**
   * `hasDoc` composes `hasDocInStore` and `hasDocInApi`. It first checks
   * if the doc is in store, and if not it then checks if it is in the
   * API.
   */
  hasDoc(id: string): Observable<boolean> {
    return this.hasDocInStore(id).pipe(
      switchMap(inStore => {
        if (inStore) {
          return this.loadDoc(id)
        }
        return this.hasDocInApi(id)
      })
    )
  }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the docs to load, then it checks if we need
   * to request a doc from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const id = state.url
    return this.waitForDocsToLoad().pipe(
      switchMap(() => this.hasDoc(id)),
      switchMap(isFound => {
        console.log('IS FOUND', isFound)
        if (isFound) {
          return of(isFound)
        }
        else {
          this._router.navigate(['/404'], {
            queryParams: {
              from: state.url
            }
          })
          return of(false)
        }
      })
    )
  }
}
