import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { fourZeroFourRouter } from './404.router'

import { ContainersModule } from './containers'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    fourZeroFourRouter,
    ContainersModule
  ]
})
export class FourZeroFourModule { }
