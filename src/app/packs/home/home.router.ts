import { Routes, RouterModule } from '@angular/router'


// Containers
import { HomeComponent } from './containers/home/home.component'
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
        component: HomeComponent
      },
      {
        path: 'doc',
        loadChildren: 'app/packs/doc/doc.module#DocModule'
      }
    ]
  }
]
export const homeRouter = RouterModule.forChild(ROUTES)
