import { App } from '../app/core'
import { Home } from '../app/packs/home'
import { Login } from '../app/packs/login'
import { FourZeroFour } from '../app/packs/404'
import { FiveZeroZero } from '../app/packs/500'

/**
 * Exports the NgPacks that will be loaded and merged into config
 * Order Matters
 */
export const main = {
  packs: [
    App,
    Home,
    Login,
    FourZeroFour,
    FiveZeroZero
  ]
}
