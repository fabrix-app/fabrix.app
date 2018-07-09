import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../../../shared/shared.module'

// Components
import { ComponentsModule } from '../components'

// Containers
import { FourZeroFourComponent } from './404/404.component'

export const COMPONENTS = [
  FourZeroFourComponent
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
