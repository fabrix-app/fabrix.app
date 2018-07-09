// Process ENV shim
import { process_env } from '../../process.env'

export const environment = {
  development: false,
  staging: false,
  testing: false,
  production: true,
  APP_BASE_HREF: process_env['APP_BASE_HREF'] || '',
  API_URL: process_env['API_URL'] || '/api/v1'
}
