import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { fiveZeroZeroRouter } from './500.router'

import { ContainersModule } from './containers/index'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    fiveZeroZeroRouter,
    ContainersModule
  ]
})
export class FiveZeroZeroModule { }
