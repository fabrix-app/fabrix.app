/**
 * Routes Configuration
 * (fabrix.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://fabrixjs.io/doc/config/routes.js
 */

'use strict'

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
  // Activity
  {
    method: 'GET',
    path: '/favicon.png',
    handler: {
      file: 'assets/img/favicon.png'
    }
  },

  {
    method: 'GET',
    path: '/sitemap.xml',
    handler: {
      file: 'assets/sitemap.xml'
    }
  },

  {
    method: 'GET',
    path: '/robots.txt',
    handler: {
      file: 'assets/robots.txt'
    }
  },

  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.home'
  },

  {
    method: 'GET',
    path: '/plugins',
    handler: 'ViewController.plugins'
  },

  {
    method: 'GET',
    path: '/support',
    handler: 'ViewController.support'
  },

  {
    method: 'GET',
    path: '/start',
    handler: 'ViewController.start'
  },

  {
    method: 'GET',
    path: '/doc/{docpath*}',
    handler: 'ViewController.doc'
  },

  {
    method: 'GET',
    path: '/search',
    handler: 'FabrixController.search'
  },

  {
    method: 'GET',
    path: '/collective/budget/{project}',
    handler: 'CollectiveController.getAnnualBudget'
  }

  // Proxy Router
  // {
  //   method: [ 'GET' ],
  //   path: '/api/v1/proxy/*',
  //   handler: 'ViewController.proxyRouter',
  //   config: {}
  // }
]
