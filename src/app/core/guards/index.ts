import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

// Guards
import { AuthGuard } from './auth'
import { IsLoggedInGuard } from './isLoggedIn'

export const GUARDS = [
  AuthGuard,
  IsLoggedInGuard
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule
  ],
  providers: [
    ...GUARDS
  ]
})
export class GuardsModule {}
