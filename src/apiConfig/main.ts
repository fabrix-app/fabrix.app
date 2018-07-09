/**
 * Trailpack Configuration
 * (app.config.main)
 *
 * @see http://fabrixjs.io/doc/config/main
 */

import { resolve, join } from 'path'
const DIST_FOLDER = join(process.cwd(), 'dist')
import { REPLSpool } from '@fabrix/spool-repl'
import { RouterSpool } from '@fabrix/spool-router'
import { ExpressSpool } from '@fabrix/spool-express'

export const main = {

  /**
   * Order does *not* matter. Each module is loaded according to its own
   * requirements.
   */
  spools: [
    REPLSpool,
    RouterSpool,
    ExpressSpool
    // require('trailpack-repl'),
    // require('trailpack-router'),
    // require('trailpack-express'),
    // require('trailpack-proxy-cart'),
    // require('trailpack-proxy-cart-countries'),
    // require('trailpack-proxy-engine'),
    // require('trailpack-proxy-generics'),
    // require('trailpack-proxy-email'),
    // require('trailpack-proxy-passport'),
    // require('trailpack-proxy-permissions'),
    // require('trailpack-proxy-notifications'),
    // require('trailpack-proxy-router'),
    // require('trailpack-proxy-sequelize'),
    // require('trailpack-proxy-sitemap')
  ],

  /**
   * Define application paths here. "root" is the only required path.
   */
  paths: {
    root: resolve(join(DIST_FOLDER)),
    temp: resolve(join(DIST_FOLDER, 'browser')),
    www: resolve(join(DIST_FOLDER, 'browser'))
  }
}
