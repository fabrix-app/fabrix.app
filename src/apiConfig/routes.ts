/**
 * Routes Configuration
 * (fabrix.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://fabrix.app/doc/config/routes.js
 */

export const routes = [
  // Handle 404s and more
  {
    method: [ 'GET' ],
    path: '/404',
    handler: 'ViewController.index',
    config: {}
  },
  {
    method: [ 'GET' ],
    path: '/500',
    handler: 'ViewController.index',
    config: {}
  },
  {
    method: [ 'GET' ],
    path: '/403',
    handler: 'ViewController.index',
    config: {}
  },
  {
    method: [ 'GET' ],
    path: '/401',
    handler: 'ViewController.index',
    config: {}
  },
  /**
   * Render the view
   */
  // Home
  {
    method: [ 'GET' ],
    path: '/',
    handler: 'ViewController.index',
    config: {}
  },
  {
    method: [ 'GET' ],
    path: '/login',
    handler: 'ViewController.index',
    config: {}
  },
  // Robots
  {
    method: [ 'GET' ],
    path: '/sitemap.xml',
    handler: {
      file: 'assets/sitemap.xml'
    }
  },

  {
    method: [ 'GET' ],
    path: '/robots.txt',
    handler: {
      file: 'assets/robots.txt'
    }
  },

  // {
  //   method: 'GET',
  //   path: '/',
  //   handler: 'ViewController.home'
  // },

  {
    method: 'GET',
    path: '/plugins',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/support',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/start',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/doc',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/doc/{docpath*}',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/api/v1/doc/{docpath*}',
    handler: 'DocController.doc'
  },

  {
    method: 'GET',
    path: '/search',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/collective/budget/{project}',
    handler: 'ViewController.index'
  }

  // Proxy Router
  // {
  //   method: [ 'GET' ],
  //   path: '/api/v1/proxy/*',
  //   handler: 'ViewController.proxyRouter',
  //   config: {}
  // }
]
