import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Shared
import { SharedModule } from '../../../shared/shared.module'

// Services
import { ServicesModule } from '../services/index'

// Controllers
import { ControllersModule } from '../controllers/controllers.module'

// Guards
import { GuardsModule } from '../guards/index'

// Resolvers
import { ResolversModule } from '../resolvers/index'

// Components
import { ComponentsModule } from '../components'

// Containers
import { HomeComponent } from './home/home.component'
import { MainComponent } from './main/main.component'

export const COMPONENTS = [
  HomeComponent,
  MainComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ServicesModule,
    ControllersModule,
    GuardsModule,
    ResolversModule,
    ComponentsModule
  ],
  declarations: [
    COMPONENTS
  ],
  entryComponents: [
    COMPONENTS
  ]
})
export class ContainersModule { }
