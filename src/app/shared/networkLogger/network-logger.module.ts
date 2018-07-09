import { NgModule } from '@angular/core'
import { NetworkLoggerService } from './network-logger.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

const SERVICES = [
  NetworkLoggerService
]

@NgModule({
  providers: [
    ...SERVICES,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkLoggerService,
      multi: true
    }
  ]
})
export class NetworkLoggerModule { }
