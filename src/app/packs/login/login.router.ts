import { Routes, RouterModule } from '@angular/router'

// Components
import { LoginComponent } from './containers/login/login.component'
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component'
import { MainComponent } from './containers/main/main.component'

export const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'forgot_password',
        component: ForgotPasswordComponent
      }
    ]
  }
]
export const loginRouter = RouterModule.forChild(ROUTES)
