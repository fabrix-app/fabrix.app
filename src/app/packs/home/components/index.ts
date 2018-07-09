// Core / Common
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Shared
import { SharedModule } from '../../../shared/shared.module'

// Services
import { ServicesModule } from '../services/index'

// Controllers
import { ControllersModule } from '../controllers/controllers.module'

// Components
import { HeaderComponent } from './header/header.component'
import { HeaderActionGroupComponent } from './header-action-group/header-action-group.component'
import { HeaderBreadcrumbsComponent } from './header-breadcrumbs/header-breadcrumbs.component'
import { HeaderSearchComponent } from './header-search/header-search.component'
import { ObjectiveSwitchComponent } from './objective-switch/objective-switch.component'
import { ProfileComponent } from './profile/profile.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { SidenavCollapseComponent } from './sidenav-collapse/sidenav-collapse.component'
import { HomeHeaderComponent } from './home-header/home-header.component'

export const COMPONENTS = [
  HomeHeaderComponent,
  HeaderComponent,
  HeaderActionGroupComponent,
  HeaderBreadcrumbsComponent,
  HeaderSearchComponent,
  ObjectiveSwitchComponent,
  ProfileComponent,
  SidenavComponent,
  SidenavCollapseComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // BrowserAnimationsModule,
    SharedModule,
    ServicesModule,
    ControllersModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
