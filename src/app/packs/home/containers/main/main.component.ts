import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router, NavigationStart, NavigationEnd } from '@angular/router'
import { chain } from 'lodash'

// Analytics
import { Angulartics2 } from 'angulartics2'
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga'

// NgEngine
import { NgEngineService } from 'ng-engine'

// RXJS
import { Observable } from 'rxjs'

// NGRX
import { Store, select } from '@ngrx/store'

import * as app from '../../../../core/store/actions/app'
import * as auth from '../../../../core/store/actions/auth'
import * as fromApp from '../../../../core/store/reducers'

import * as home from '../../store/actions/home'
import * as fromHome from '../../store/reducers'

import { NavigationService, NavItems, NavBuilt, SelectableGroup } from '../../../../core/services/navigation/navigation.service'

// Models
import { User } from '../../../../core/models/User'


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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  // States and Titles
  public appState$: Observable<any>
  public appTitle

  public homeState$: Observable<any>
  public title: string

  // Layout
  public header: HeaderSettings
  public sidenav: SideNavSettings

  // Navigation
  public firstNavigationStart = false
  public navConfig: NavItems
  public nav$: Observable<NavBuilt>

  // Auth
  public isAuthenticated$: Observable<any>
  public user$: Observable<User>

  constructor(
    private _ngEngine: NgEngineService,
    private _store: Store<any>,
    private _navigation: NavigationService,
    private _router: Router,
    // private _angulartics2: Angulartics2,
    private _angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    this.header = this._ngEngine.config.get('app.header')
    this.sidenav = this._ngEngine.config.get('app.sidenav')
    this.title = this._ngEngine.config.get('app.title')
    this.navConfig = this._ngEngine.config.get('app.navigation')

    this.appState$ = this._store.pipe(select(fromApp.getAppState))

    // this._store.dispatch(new app.SetTitleAction({title: this.title}))

    this.nav$ = this._store.pipe(select(fromApp.getAppNavigationState))

    this.isAuthenticated$ = this._store.pipe(select(fromApp.getAuthLoggedIn))
    this.user$ = this._store.pipe(select(fromApp.getAuthUser))

    // Init a nav service
    this._router.events.subscribe(e => {
      if (e instanceof NavigationStart && this.firstNavigationStart === false) {
        if (!this.firstNavigationStart) {
          this._navigation.init(this.navConfig, e, [], 2)
        }
        this.firstNavigationStart = true
      }
      else if (e instanceof NavigationEnd) {
        if (!this.firstNavigationStart) {
          this._navigation.init(this.navConfig, e, [], 2)
        }
        this.firstNavigationStart = true
        this._navigation.select(e, [], 2)
      }
    })
  }

  ngOnInit() {}

  toggleNavChild(child): void {
    this._navigation.toggle(child)
  }
}
