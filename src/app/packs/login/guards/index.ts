import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

// Guards


export const GUARDS = [

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule
  ],
  providers: [
    ...GUARDS
  ]
})
export class GuardsModule {}
