import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Shared
import { SharedModule } from '../shared'

// Containers
import { ContainersModule } from './containers'

// Components
import { ComponentsModule } from './components'

// Services
import { ServicesModule } from './services/index'

// Guards
import { GuardsModule } from './guards/index'

// Controllers
import { ControllersModule } from './controllers/controllers.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ContainersModule,
    ComponentsModule,
    ServicesModule,
    GuardsModule,
    ControllersModule
  ]
})
export class CoreModule {}
