import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router, NavigationEnd, NavigationStart } from '@angular/router'
import { NgEngineService } from 'ng-engine'
import { Observable } from 'rxjs'
import { chain } from 'lodash'

import { Store, select } from '@ngrx/store'
import { SessionAction } from '../../store/actions/auth'
import * as fromApp from '../../store/reducers'

// Models
import { User } from '../../models/User'



// SideNavSettings Interface
export interface SideNavSettings {
  mode?: string,
  opened?: string,
  fixedInViewport?: boolean,
  fixedTopGap?: number,
  fixedBottomGap?: number
}

export interface HeaderSettings {
  height: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  // Auth
  public isAuthenticated$: Observable<any>
  public user$: Observable<User>

  constructor(
    private _ngEngine: NgEngineService,
    private _store: Store<any>,
    private _router: Router
  ) {
    // Dispatch the Reconnect Session
    this._store.dispatch(new SessionAction())

    this.isAuthenticated$ = this._store.pipe(select(fromApp.getAuthLoggedIn))
    this.user$ = this._store.pipe(select(fromApp.getAuthUser))
  }

  ngOnInit() {}
}
