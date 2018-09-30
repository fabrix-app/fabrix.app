/**
 * Routes Configuration
 * (fabrix.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://fabrix.app/doc/config/routes.js
 */

export const routes = {
  // Handle 404s and more
  '/404': {
    'GET': 'ViewController.index',
    config: {}
  },
  '/500': {
    'GET': 'ViewController.index',
    config: {}
  },
  '/403': {
    'GET': 'ViewController.index',
    config: {}
  },
  '/401': {
    'GET': 'ViewController.index',
    config: {}
  },
  /**
   * Render the view
   */
  // Home
  '/': {
    'GET': 'ViewController.index',
    config: {}
  },
  '/login': {
    'GET': 'ViewController.index',
    config: {}
  },
  // Robots
  '/sitemap.xml': {
    'GET': {
      handler: {
        file: 'assets/sitemap.xml'
      }
    }
  },

  '/robots.txt': {
    'GET': {
      handler: {
        file: 'assets/robots.txt'
      }
    }
  },

  '/plugins': {
    'GET': 'ViewController.index'
  },

  '/enterprise': {
    'GET': 'ViewController.index'
  },

  '/start': {
    'GET': 'ViewController.index'
  },

  '/docs': {
    'GET': 'ViewController.index'
  },

  '/docs/*': {
    'GET': {
      handler: 'ViewController.index'
    }
  },

  '/api/v1/start': {
    'GET': 'DocController.start'
  },

  '/api/v1/docs*': {
    'GET': 'DocController.doc'
  },

  // '/api/v1/docs/*': {
  //   'GET': 'DocController.doc'
  // },

  '/search': {
    'GET': 'ViewController.index'
  },

  '/collective/budget/:project': {
    'GET': 'ViewController.index'
  }

  // Proxy Router
  // {
  //   method: [ 'GET' ],
  //   path: '/api/v1/proxy/*',
  //   handler: 'ViewController.proxyRouter',
  //   config: {}
  // }
}
