import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NgrxFormsModule } from 'ngrx-forms'

import { SharedModule } from '../../../shared/shared.module'

import { LoginHeaderComponent } from './login-header/login-header.component'
import { LoginMainComponent } from './login-main/login-main.component'
import { LoginFormComponent } from './login-form/login-form.component'

import { ForgotPasswordMainComponent } from './forgot-password-main/forgot-password-main.component'
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component'
import { ForgotPasswordHeaderComponent } from './forgot-password-header/forgot-password-header.component'

export const COMPONENTS = [
  LoginHeaderComponent,
  LoginMainComponent,
  LoginFormComponent,
  ForgotPasswordHeaderComponent,
  ForgotPasswordMainComponent,
  ForgotPasswordFormComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgrxFormsModule,
    SharedModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
