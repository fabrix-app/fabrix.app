import { Request, Response } from 'express'
import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Fabrix app
 * @see {@link https://fabrix.app/doc/api/controllers}
 * @this FabrixApp
 */

export class DocController extends Controller {
  /**
   * Render the start page
   */
  start (req, res) {
    this.app.services.DocumentationService.proxy([ 'start' ])
      .then(docHtml => {
        res.json(docHtml)
      })
  }

  /**
   * Render the documentation pages
   */
  doc (req, res) {
    const docpath = (req.params.docpath || '').split('/')

    this.app.services.DocumentationService.proxy(docpath)
      .then(docHtml => {
        res.json(docHtml)
      })
      .catch(err => {
        this.log.error(`Documentation 404. Path: ${docpath}`)
        res.redirectTo('404')
      })
  }
}


