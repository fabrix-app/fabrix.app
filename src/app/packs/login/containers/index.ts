import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NgrxFormsModule } from 'ngrx-forms'

import { SharedModule } from '../../../shared/shared.module'

// Components
import { ComponentsModule } from '../components'

// Containers
import { LoginComponent } from './login/login.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { MainComponent } from './main/main.component'

export const COMPONENTS = [
  LoginComponent,
  ForgotPasswordComponent,
  MainComponent
]

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgrxFormsModule,
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
