import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OrderByPipe } from './order-by.pipe'

const PIPES = [
  OrderByPipe
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES
  ],
  declarations: [
    ...PIPES
  ],
  providers: [
    ...PIPES
  ]
})
export class PipesModule { }
