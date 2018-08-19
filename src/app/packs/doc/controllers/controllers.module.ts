import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DocsController } from './docs.controller'

export const CONTROLLERS = [
  DocsController
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
