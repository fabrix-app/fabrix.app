import { Request, Response } from 'express'
import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'

/**
 * @module DefaultController
 *
 * @description Default Controller included with a new Fabrix app
 * @see {@link https://fabrix.app/docs/api/controllers}
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
