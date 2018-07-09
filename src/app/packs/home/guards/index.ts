import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

// Guards
import { EventsGuard } from './events'

export const GUARDS = [
  EventsGuard
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
