// Core / Common
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { SharedModule } from '../../shared/shared.module'
import { loginRouter } from './login.router'

// Containers
import { ContainersModule } from './containers'

// Services
import { ServicesModule } from './services/index'

// Guards
import { GuardsModule } from './guards/index'

// Controllers
import { ControllersModule } from './controllers/controllers.module'

// Effects for Pack
import { LoginEffects, LoginFormEffects, ForgotPasswordFormEffects } from './store/effects'
// Reducers for Pack
import { reducers, getInitialState } from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    loginRouter,
    StoreModule.forFeature('login', reducers, {
      initialState: getInitialState
    }),
    EffectsModule.forFeature([
      LoginEffects,
      LoginFormEffects,
      ForgotPasswordFormEffects
    ]),
    ContainersModule,
    ServicesModule,
    GuardsModule,
    ControllersModule
  ]
})
export class LoginModule { }
