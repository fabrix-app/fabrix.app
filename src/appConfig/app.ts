// Process ENV shim
import { process_env } from '../../process.env'

export const app = {
  title: 'Fabrix',
  sidenav: {
    mode: 'side',
    opened: 'opened',
    fixedInViewport: true,
    fixedTopGap: 0,
    fixedBottomGap: 0
  },
  header: {
    height: 70
  },
  navigation: {
    name: 'app',
    children: {
      profile: {
        name: 'Profile',
        icon: 'user',
        active: false,
        open: false,
        display: false,
        routerLink: '/profile',
        link: '/profile',
        children: {
          profile: {
            name: 'My Profile',
            open: false,
            routerLink: '/profile',
            link: '/profile',
            classes: [],
            children: {
              profile: {
                name: 'Settings',
                open: false,
                routerLink: '/profile/settings',
                link: '/profile/settings',
                classes: []
              }
            }
          }
        }
      },
      login: {
        name: 'Login',
        icon: 'user',
        active: false,
        open: false,
        display: false,
        routerLink: '/login',
        link: '/login',
        children: {
          login: {
            name: 'Login',
            open: false,
            routerLink: '/login',
            link: '/login',
            classes: [],
            children: {
              forgot_password: {
                name: 'Forgot Password',
                open: false,
                routerLink: '/login/forgot_password',
                link: '/login/forgot_password',
                classes: []
              }
            }
          }
        }
      }
    }
  }
}
