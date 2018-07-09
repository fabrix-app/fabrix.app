import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NetworkRequestService } from './network-request.service'

const SERVICES = [
  NetworkRequestService
]

@NgModule({
  providers: [
    ...SERVICES,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: NetworkRequestService,
      multi: true
    }
  ]
})
export class NetworkRequestModule { }
