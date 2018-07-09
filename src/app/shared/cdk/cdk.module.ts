import { NgModule } from '@angular/core'

// CDK Tables
import { CdkTableModule } from '@angular/cdk/table'

const MODULES = [
  CdkTableModule
]

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: []
})
export class CdkModule { }
