import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

// Resolvers


export const RESOLVERS = [
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule
  ],
  providers: [
    ...RESOLVERS
  ]
})
export class ResolversModule {}
