import { Injectable } from '@angular/core'
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap, filter, map } from 'rxjs/operators'

import { NgEngineService } from 'ng-engine'

@Injectable()
export class NetworkResponseService implements HttpInterceptor {
  constructor(
    private _ngEngine: NgEngineService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      filter(event => event.type === HttpEventType.Response),
      map((res: HttpResponse<any>) => {
        // this._ngEngine.log(res.status || 200, res.body)
        const pagination = this.hasPagination(res)

        if (!!pagination) {
          // console.log('HAS PAGINATION', pagination)
          return new HttpResponse({
            body: {
              pagination: pagination,
              rows: res.body
            }
          })
        }
        else {
          // console.log('HAS NO PAGINATION')
          return res
        }
      })
    )
  }

  private hasPagination(res: HttpResponse<any>) {
    const page = res.headers.get('x-pagination-page') || res.headers.get('X-Pagination-Page')
    const pages = res.headers.get('x-pagination-pages') || res.headers.get('X-Pagination-Pages')
    const offset = res.headers.get('x-pagination-offset') || res.headers.get('X-Pagination-Offset')
    const limit = res.headers.get('x-pagination-limit') || res.headers.get('X-Pagination-Limit')
    const total = res.headers.get('x-pagination-total') || res.headers.get('X-Pagination-Total')
    let sort = res.headers.get('x-pagination-sort') || res.headers.get('X-Pagination-Sort')

    if (page || pages || offset || limit || sort || total) {
      try {
        sort = JSON.parse(sort)
      }
      catch (err) {
        this._ngEngine.log('SORT PARSE ERROR', err)
      }
      return {
        page: page,
        pages: pages,
        total: total,
        offset: offset,
        limit: limit,
        sort: sort
      }
    }
    else {
      return false
    }
  }
}
