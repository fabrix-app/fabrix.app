import { Injectable, Optional, Inject } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { NgEngineService } from 'ng-engine'


// Models
import { Event } from '../models/Event'
import { EventQuery } from '../models/EventQuery'

@Injectable()
export class EventsController {

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
  public findOne(payload: number): Observable<any> {
    return this.http.get(`${ this.url }/events/${payload}`)
  }

  /**
   * Find All Events
   */
  public findAll(payload) {
    return this.http.get(`${ this.url }/events`, {params: payload})
  }

  /**
   * Find All Events
   */
  public search(payload) {
    return this.http.get(`${ this.url }/events/search`, {params: payload})
  }
}

