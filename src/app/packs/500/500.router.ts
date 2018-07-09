import { Routes, RouterModule } from '@angular/router'
import { FiveZeroZeroComponent } from './containers/500/500.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: FiveZeroZeroComponent
  }
]

export const fiveZeroZeroRouter = RouterModule.forChild(ROUTES)
