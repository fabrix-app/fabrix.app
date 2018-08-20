import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import * as request from 'request-promise'
const NPM_URI = 'https://registry.npmjs.org/-/_view/byKeyword?startkey=["spool"]&endkey=["spool",{}]&group_level=3'

/**
 * @module FabrixmixService
 * @description TODO document Service
 */
export class FabrixmixService extends Service {
  listSpools () {
    return request(NPM_URI)
      .then(r => JSON.parse(r))
      .then(({ rows }) => rows)
      .then(rows => rows.map(r => {
        return {
          name: r.key[1],
          description: r.key[2]
        }
      }))
  }
}

