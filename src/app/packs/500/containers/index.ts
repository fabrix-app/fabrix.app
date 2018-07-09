import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../../../shared/shared.module'

// Components
import { ComponentsModule } from '../components'

// Containers
import { FiveZeroZeroComponent } from './500/500.component'

export const COMPONENTS = [
  FiveZeroZeroComponent
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  declarations: [
    COMPONENTS
  ],
  entryComponents: [
    COMPONENTS
  ]
})
export class ContainersModule { }
