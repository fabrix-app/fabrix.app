import { Injectable, Optional, Inject } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { NgEngineService } from 'ng-engine'


// Models
import { Doc } from '../models/Doc'
import { DocQuery } from '../models/DocQuery'

@Injectable()
export class DocsController {

  private _baseRef
  private _apiUrl

  constructor(
    private _ngEngine: NgEngineService,
    private http: HttpClient,
    private _store: Store<any>,
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {
    this._baseRef = origin || ''
    this._apiUrl = this._ngEngine.config.get('API_URL') || ''
  }

  get url() {
    return `${this._baseRef }${ this._apiUrl }`
  }

  /**
   * Find One Event
   */
  public start(payload: string): Observable<any> {
    return this.http.get(`${ this.url }/start`)
  }
  //
  // /**
  //  * Find All Events
  //  */
  // public findAll(payload) {
  //   return this.http.get(`${ this.url }/events`, {params: payload})
  // }
  //
  // /**
  //  * Find All Events
  //  */
  // public search(payload) {
  //   return this.http.get(`${ this.url }/events/search`, {params: payload})
  // }
  /**
   * Find One
   */
  public findOne(payload) {
    console.log('fIND ONE', payload)
    return this.http.get(`${ this.url }${payload}`)
  }
}

