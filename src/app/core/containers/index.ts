import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from '../../shared/shared.module'

// Services
import { ServicesModule } from '../services/index'

// Components
import { ComponentsModule } from '../components'

// Containers
import { AppComponent } from './app/app.component'

export const COMPONENTS = [
  AppComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    // BrowserAnimationsModule,
    ComponentsModule,
    ServicesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ContainersModule {}
