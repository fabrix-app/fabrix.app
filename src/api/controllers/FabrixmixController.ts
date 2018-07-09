import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'

/**
 * @module TrailmixController
 * @description TODO document Controller.
 */
export class FabrixController extends Controller {

  search (request, reply) {
    this.app.services.TrailmixService.listSpools()
      .then(packs => reply(packs))
  }
}

