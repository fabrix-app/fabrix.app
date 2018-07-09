import { Routes, RouterModule } from '@angular/router'
import { FourZeroFourComponent } from './containers/404/404.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: FourZeroFourComponent
  }
]

export const fourZeroFourRouter = RouterModule.forChild(ROUTES)
