import { FabrixService as Service } from '@fabrix/fabrix/dist/common'
import * as request from 'request-promise'
const ISO6391 = require('iso-639-1')

export interface git {
  protocol: string,
  host: string,
  base: string,
  defaultLanguage: string,
  defaultExtension: string,
  supportedLanguages: string[],
  allLanguages: string[]
}
/**
 * @module DocumentationService
 * @description Proxy documentation pages
 */
export class DocumentationService extends Service {

  get git (): git {
    return {
      protocol: 'https',
      host: 'fabrix-app.github.io',
      base: 'docs',
      defaultLanguage: 'en',
      defaultExtension: 'html',
      supportedLanguages: [
        'en'
      ],
      allLanguages: ISO6391.getAllCodes()
    }
  }

  /**
   * Proxies simple doc path requests to the documentation server (gh pages)
   * @return html string
   */
  proxy (reqPath) {
    const {
      protocol,
      host,
      base,
      defaultLanguage,
      //defaultExtension,
      supportedLanguages,
      allLanguages
    } = this.git

    const specifiedLang = allLanguages.includes(reqPath[0]) && reqPath.shift() || defaultLanguage
    const actualLang = supportedLanguages.includes(specifiedLang) && specifiedLang || defaultLanguage

    const docPath = [ actualLang, ...reqPath ].join('/')
    const uri = `${protocol}://${host}/${base}/${docPath}`

    this.app.log.debug('DocumentationService params', specifiedLang, actualLang, docPath, reqPath)
    this.app.log.info('DocumentationService: proxying uri', uri)

    return request(uri)
  }
}

