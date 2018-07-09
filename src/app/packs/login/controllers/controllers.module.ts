import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import { UsersController } from './users.controller'

export const CONTROLLERS = [
  // UsersController
]

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...CONTROLLERS
  ]
})
export class ControllersModule {}
