import { FabrixService as Service } from '@fabrix/fabrix/dist/common'

const request = require('request-promise')

/**
 * @module CollectiveService
 * @description TODO document Service
 */
export class CollectiveService extends Service {
  /**
   * Get the annual budget for the fabrix open collective
   */
  getAnnualBudget (project = 'fabrix') {
    const uri = `https://opencollective.com/api/groups/${project}`

    return request(uri)
      .then(body => JSON.parse(body))
      .then(group => group.yearlyIncome)
  }

  getGithubFollowers (project = 'fabrix') {
    const options = {
      url: 'https://api.github.com/repos/fabrix-app/fabrix',
      auth: {
        user: 'scott-wyatt',
        pass: this.app.config.get('github.token')
      },
      headers: {
        'User-Agent': 'Fabrix'
      }
    }

    return request(options)
      .then(body => JSON.parse(body))
      .then(repo => repo.watchers_count)
  }
}

