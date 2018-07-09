import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Shared
import { SharedModule } from '../../shared/shared.module'

// Services
import { ServicesModule } from '../services/index'

// Components

export const COMPONENTS = [

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ServicesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
