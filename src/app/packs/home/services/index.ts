import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from '../../../shared/shared.module'

// Service
import { UserNamePipe } from './pipes/user-name.pipe'

export const PROVIDERS = [

  ]

export const SERVICES = [
  UserNamePipe
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ...SERVICES
  ],
  declarations: [
    ...SERVICES
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class ServicesModule {}
