// Process ENV shim
import { process_env } from '../../process.env'

export const environment = {
  development: false,
  staging: true,
  testing: false,
  production: false,
  APP_BASE_HREF: process_env['APP_BASE_HREF'] || '',
  API_URL: process_env['API_URL'] || '/api/v1'
}
