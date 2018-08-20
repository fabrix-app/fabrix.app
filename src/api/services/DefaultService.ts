import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
/**
 * @module DefaultService
 *
 * @description Default Service included with a new Fabrix app
 * @see {@link https://fabrix.app/docs/api/services}
 * @this FabrixApp
 */
export class DefaultService extends Service {

  /**
   * Return some info about this application
   */
  getApplicationInfo() {
    const spools = []
    Object.keys(this.app.spools).forEach(spoolName => {
      if (spoolName !== 'inspect') {
        const spool = this.app.spools[spoolName]
        spools.push({
          name: spool.name,
          version: spool.pkg.version
        })
      }
    })
    return {
      app: this.app.pkg.version,
      node: process.version,
      libs: process.versions,
      spools: spools
    }
  }
}
