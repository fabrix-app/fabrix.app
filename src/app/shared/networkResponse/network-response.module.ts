import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NetworkResponseService } from './network-response.service'

const SERVICES = [
  NetworkResponseService
]

@NgModule({
  providers: [
    ...SERVICES,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: NetworkResponseService,
      multi: true
    }
  ]
})
export class NetworkResponseModule { }
