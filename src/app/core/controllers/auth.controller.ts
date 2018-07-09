import { Injectable, Optional, Inject } from '@angular/core'
import { APP_BASE_HREF } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { NgEngineService } from 'ng-engine'

// Models
import { Authenticate } from '../models/Authenticate'

@Injectable()
export class AuthController {

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
   * Session
   */
  public session(payload): Observable<any> {
    return this.http.get(`${ this.url }/auth/session`, {params: payload})
  }

  /**
   * Recover
   */
  public recover(payload): Observable<any> {
    return this.http.post(`${ this.url }/auth/recover`, payload)
  }

  /**
   * Login
   */
  public login(payload: Authenticate): Observable<any> {
    return this.http.post(`${ this.url }/auth/local`, {
      identifier: payload.email,
      password: payload.password
    })
  }

  /**
   * Logout
   */
  public logout(payload: any): Observable<any> {
    return this.http.post(`${ this.url }/auth/logout`, {})
  }
}

