import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

// Import NGRX
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { NgrxFormsModule } from 'ngrx-forms'

// Root Reducers, Actions, Effects
import { reducers, getInitialState } from './core/store/reducers'
// import * as fromRootActions from './store/actions'
import { AuthEffects } from './core/store/effects'

// NgEngine for NgPacks
import { NgEngineModule, ENGINE_CONFIG } from 'ng-engine'
// Routing Module
import { AppRoutingModule } from './app.routing.module'
// Root Component
import { AppComponent } from './core/containers/app/app.component'
// Shared Module
import { SharedModule } from './shared'
// Core Module
import { CoreModule } from './core/core.module'
// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Angulartics2GoogleAnalytics
import { Angulartics2Module } from 'angulartics2'
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga'

// Service Worker
import { ServiceWorkerModule } from '@angular/service-worker'

// App Config for NgEngine
import * as appConfig from '../appConfig'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'fabrix'
    }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(reducers, {
      initialState: getInitialState
    }),
    EffectsModule.forRoot([ AuthEffects ]),
    // StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production
    }),
    // Forms
    NgrxFormsModule,
    // Configuration
    NgEngineModule,
    // Angularitcs
    Angulartics2Module.forRoot([
      Angulartics2GoogleAnalytics
    ]),
    appConfig.environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: appConfig.environment.APP_BASE_HREF
    // },
    {
      provide: ENGINE_CONFIG,
      useValue: {
        appConfig: appConfig
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
