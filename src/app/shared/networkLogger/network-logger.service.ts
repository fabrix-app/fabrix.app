import { Injectable } from '@angular/core'
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap, filter } from 'rxjs/operators'

import { NgEngineService } from 'ng-engine'

@Injectable()
export class NetworkLoggerService implements HttpInterceptor {
  constructor(
    private _ngEngine: NgEngineService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._ngEngine.log(`${req.method.toUpperCase()} ${req.url} ${req.body}`)
    return next.handle(req).pipe(
      filter(event => event.type === HttpEventType.Response),
      tap((response: HttpResponse<any>) => this._ngEngine.log(response.status || 200, response.body)),
    )
  }
}
