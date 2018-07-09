import { Action } from '@ngrx/store'
import { Authenticate } from '../../models/Authenticate'
import { User } from '../../models/User'

export enum ActionTypes {
  LOGIN =           '[Auth] Login',
  LOGIN_SUCCESS =   '[Auth] Login Success',
  LOGIN_FAILURE =   '[Auth] Login Failure',
  LOGOUT =          '[Auth] Logout',
  LOGOUT_SUCCESS =  '[Auth] Logout Success',
  LOGOUT_FAILURE =  '[Auth] Logout Failure',
  LOGIN_REDIRECT =  '[Auth] Login Redirect',
  HOME_REDIRECT =   '[Auth] Home Redirect',
  RECOVER =         '[Auth] Recover',
  RECOVER_SUCCESS = '[Auth] Recover Success',
  RECOVER_FAILURE = '[Auth] Recover Failure',
  SESSION =         '[Auth] Session',
  SESSION_SUCCESS = '[Auth] Session Success',
  SESSION_FAILURE = '[Auth] Session Failure',
}

export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN
  constructor(public payload: Authenticate) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS
  constructor(public payload: any) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE
  constructor(public payload: any) {}
}

export class LoginRedirectAction implements Action {
  readonly type = ActionTypes.LOGIN_REDIRECT
}

export class HomeRedirectAction implements Action {
  readonly type = ActionTypes.HOME_REDIRECT
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT
}

export class LogoutSuccessAction implements Action {
  readonly type = ActionTypes.LOGOUT_SUCCESS
}

export class LogoutFailureAction implements Action {
  readonly type = ActionTypes.LOGOUT_FAILURE
  constructor(public payload: any) {}
}

export class RecoverAction implements Action {
  readonly type = ActionTypes.RECOVER
  constructor(public payload: any) {}
}

export class RecoverSuccessAction implements Action {
  readonly type = ActionTypes.RECOVER_SUCCESS
  constructor(public payload: any) {}
}

export class RecoverFailureAction implements Action {
  readonly type = ActionTypes.RECOVER_FAILURE
  constructor(public payload: any) {}
}

// Session
export class SessionAction implements Action {
  readonly type = ActionTypes.SESSION
}

export class SessionSuccessAction implements Action {
  readonly type = ActionTypes.SESSION_SUCCESS
  constructor(public payload: {user: User}) {}
}

export class SessionFailureAction implements Action {
  readonly type = ActionTypes.SESSION_FAILURE
  constructor(public payload: {error: any}) {}
}

export type Actions =
  | LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LoginRedirectAction
  | HomeRedirectAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutFailureAction
  | RecoverAction
  | RecoverSuccessAction
  | RecoverFailureAction
  | SessionAction
  | SessionSuccessAction
  | SessionFailureAction
