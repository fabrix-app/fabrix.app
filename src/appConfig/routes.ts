import { Routes } from '@angular/router'
import { AuthGuard } from '../app/core/guards/auth'
import { IsLoggedInGuard } from '../app/core/guards/isLoggedIn'

export const routes: Routes = [
  {
    path: '',
    // canActivate: [ AuthGuard ],
    loadChildren: 'app/packs/home/home.module#HomeModule'
  },
  {
    path: 'login',
    canActivate: [ IsLoggedInGuard ],
    loadChildren: 'app/packs/login/login.module#LoginModule'
  },
  {
    path: '500',
    loadChildren: 'app/packs/500/500.module#FiveZeroZeroModule'
  },
  {
    path: '404',
    loadChildren: 'app/packs/404/404.module#FourZeroFourModule'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]
