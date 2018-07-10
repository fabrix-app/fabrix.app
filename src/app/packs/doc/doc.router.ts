import { Routes, RouterModule } from '@angular/router'


// Containers
import { DocComponent } from './containers/doc/doc.component'
import { MainComponent } from './containers/main/main.component'

// Guards

// Resolvers

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DocComponent
      }
    ]
  }
]
export const docRouter = RouterModule.forChild(ROUTES)
