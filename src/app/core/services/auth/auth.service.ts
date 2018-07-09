import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/observable/throw'
import { Authenticate } from '../../models/Authenticate'
import { AuthController } from '../../controllers/auth.controller'

@Injectable()
export class AuthService {
  constructor(
    private _controller: AuthController,
  ) {}

  session(payload): Observable<any> {
    return this._controller.session(payload)
  }

  recover(payload: Authenticate): Observable<any> {
    return this._controller.recover(payload)
  }

  login(payload: Authenticate): Observable<any> {
    return this._controller.login(payload)
  }

  logout() {
    return this._controller.logout(true)
  }
}
