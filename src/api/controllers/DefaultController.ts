import { Request, Response } from 'express'
const Controller = require('fabrix/controller')

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Fabrix app
 * @see {@link http://fabrixjs.io/doc/api/controllers}
 * @this FabrixApp
 */

export class DefaultController extends Controller {
  /**
   * Return some info about this application
   */
  info(req: Request, res: Response) {
    res.status(200).json(this.app.services.DefaultService.getApplicationInfo())
  }
}
