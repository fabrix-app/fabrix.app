import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

// Shared
import { SharedModule } from '../../shared/shared.module'

// Router
import { docRouter } from './doc.router'

// Container
import { ContainersModule } from './containers'

// Controllers
import { ControllersModule } from './controllers/controllers.module'

// Effects for Pack
import { DocsEffects } from './store/effects'
// Reducers for Pack
import { reducers, getInitialState } from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    docRouter,
    StoreModule.forFeature('doc', reducers, {
      initialState: getInitialState
    }),
    EffectsModule.forFeature([
      DocsEffects
    ]),
    ControllersModule,
    ContainersModule
  ]
})
export class DocModule { }
