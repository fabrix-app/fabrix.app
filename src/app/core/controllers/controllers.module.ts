import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { AuthController } from './auth.controller'

export const CONTROLLERS = [
  AuthController
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...CONTROLLERS
  ]
})
export class ControllersModule {}
