import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EventsController } from './events.controller'

export const CONTROLLERS = [
  EventsController
]

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...CONTROLLERS
  ]
})
export class ControllersModule {}
