import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

// Shared
import { SharedModule } from '../../shared/shared.module'

// Router
import { homeRouter } from './home.router'

// Container
import { ContainersModule } from './containers'

// Controllers
import { ControllersModule } from './controllers/controllers.module'

// Effects for Pack
import { HomeEffects, HomeEventsEffects } from './store/effects'
// Reducers for Pack
import { reducers, getInitialState } from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRouter,
    StoreModule.forFeature('home', reducers, {
      initialState: getInitialState
    }),
    EffectsModule.forFeature([
      HomeEffects,
      HomeEventsEffects
    ]),
    ControllersModule,
    ContainersModule
  ]
})
export class HomeModule { }
