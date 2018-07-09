import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { map, take, switchMap, filter } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { HomeRedirectAction } from '../store/actions/auth'
import * as fromAuth from '../store/reducers'

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(
    private _store: Store<fromAuth.State>
  ) {}

  /**
   * This method creates an observable that waits for the `loaded` property
   * of the auth state to turn `true`, emitting one time once loading
   * has finished.
   */
  waitForSessionToLoad(): Observable<boolean> {
    return this._store.pipe(
      select(fromAuth.getAuthLoading),
      filter(loading => !loading),
      take(1)
    )
  }

  /**
   * This method returns an observable if the `isLoggedIn` property
   * of the auth state
   */
  isLoggedIn(): Observable<boolean> {
    return this._store.pipe(
      select(fromAuth.getAuthLoggedIn),
      switchMap(isAuth => of(!!isAuth)),
      take(1)
    )
  }

  canActivate(): Observable<boolean> {
    return this.waitForSessionToLoad().pipe(
      switchMap(() => this.isLoggedIn()),
      switchMap(isAuth => {
        console.log('isLoggedIn isAuth', isAuth)
        if (isAuth) {
          this._store.dispatch(new HomeRedirectAction())
          return of(false)
        }
        return of(true)
      })
    )
  }
}
