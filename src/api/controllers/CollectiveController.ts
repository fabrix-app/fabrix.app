import { FabrixController as Controller } from '@fabrix/fabrix/dist/common'

/**
 * @module CollectiveController
 * @description OpenCollective API .
 */
export class CollectiveController extends Controller {

  getAnnualBudget (request, reply) {
    const { project } = request.params.project

    this.services.CollectiveService.getAnnualBudget(project)
      .then(budget => reply((budget / 100).toFixed(2)))
  }

}

