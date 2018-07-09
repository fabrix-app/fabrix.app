import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Charts
// import { NgxChartsModule } from '@swimlane/ngx-charts'

// CDK
import { CdkModule } from './cdk/cdk.module'

// Material
import { MaterialModule } from './material/material.module'

// Network Request
import { NetworkRequestModule } from './networkRequest/network-request.module'

// Network Logger
import { NetworkLoggerModule } from './networkLogger/network-logger.module'

// Network Response
import { NetworkResponseModule } from './networkResponse/network-response.module'

// Pipes
import { PipesModule } from './pipes/pipes.module'

@NgModule({
  imports: [
    // 3rd Part Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Local Modules
    CdkModule,
    MaterialModule,
    NetworkRequestModule,
    NetworkLoggerModule,
    NetworkResponseModule,
    PipesModule
  ],
  exports: [
    // 3rd Party Modules
    CdkModule,
    MaterialModule,

    // Local Modules
    NetworkRequestModule,
    NetworkResponseModule,
    NetworkLoggerModule,
    PipesModule
  ]
})
export class SharedModule { }
