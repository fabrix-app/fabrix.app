import { Injectable } from '@angular/core'
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'

import { NgEngineService } from 'ng-engine'

@Injectable()
export class NetworkRequestService implements HttpInterceptor {
  constructor(
    private _ngEngine: NgEngineService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
    })
    return next.handle(request)
  }
}
