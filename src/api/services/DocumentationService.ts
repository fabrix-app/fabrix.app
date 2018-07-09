import { FabrixService as Service } from '@fabrix/fabrix/dist/common'

const request = require('request-promise')
const lang = require('iso-639-1')

/**
 * @module DocumentationService
 * @description Proxy documentation pages
 */
export class DocumentationService extends Service {

  get git () {
    return {
      protocol: 'https',
      host: 'fabrix-app.github.io',
      base: 'doc',
      defaultLanguage: 'en',
      defaultExtension: 'html',
      supportedLanguages: [
        'en'
      ],
      allLanguages: lang.getAllCodes()
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

    this.log.info('DocumentationService: proxying uri', uri)

    return request(uri)
  }
}

