import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

// import { DocsGuard } from './docs'
import { DocExistsGuard } from './doc-exists'

export const GUARDS = [
  // DocsGuard,
  DocExistsGuard
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
