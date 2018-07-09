import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

export const SERVICES = [
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...SERVICES
  ],
  declarations: [
    ...SERVICES
  ],
  providers: [
    ...SERVICES
  ]
})
export class ServicesModule {}
