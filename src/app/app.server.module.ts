import { NgModule } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'
import { RouterModule } from '@angular/router'
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader'

// NgEngine for NgPacks
import { NgEngineModule, ENGINE_CONFIG } from 'ng-engine'
// Root Module
import { AppModule } from './app.module'
// Root Component
import { AppComponent } from './core/containers/app/app.component'
// Route Module
import { AppRoutingModule } from './app.routing.module'
// Shared Module
import { SharedModule } from './shared'
// Core Module
import { CoreModule } from './core/core.module'
// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Angulartics2GoogleAnalytics
import { Angulartics2Module } from 'angulartics2'
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga'

// App Config for NgEngine
import * as appConfig from '../appConfig'

// Import NGRX
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
// import { StoreRouterConnectingModule } from '@ngrx/router-store'
// import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { NgrxFormsModule } from 'ngrx-forms'
import { reducers, getInitialState } from './core/store/reducers'
import { AuthEffects } from './core/store/effects'


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    RouterModule,
    AppRoutingModule,
    ModuleMapLoaderModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(reducers, {
      initialState: getInitialState
    }),
    EffectsModule.forRoot([ AuthEffects ]),
    // StoreRouterConnectingModule,
    // Forms
    NgrxFormsModule,
    // Configuration
    NgEngineModule,
    // Angularitcs
    Angulartics2Module.forRoot([
      Angulartics2GoogleAnalytics
    ]),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: appConfig.environment.APP_BASE_HREF
    },
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
export class AppServerModule {

}
