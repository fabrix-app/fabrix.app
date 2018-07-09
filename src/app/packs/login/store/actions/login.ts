import { Action } from '@ngrx/store'
import { Login } from '../../models/Login'

export enum ActionTypes {
  LOGIN         = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAILURE = '[Login] Login Failure',
  RECOVER         = '[Recover] Recover',
  RECOVER_SUCCESS = '[Recover] Recover Success',
  RECOVER_FAILURE = '[Recover] Recover Failure'
}

// Login
export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN
  constructor(public payload: Login) { }
}

// Login Success TODO types
export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS
  constructor(public payload: any) { }
}

// Login Failure TODO types
export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE
  constructor(public payload: any) { }
}

// Recover
export class RecoverAction implements Action {
  readonly type = ActionTypes.RECOVER
  constructor(public payload: Login) { }
}

// Recover Success TODO types
export class RecoverSuccessAction implements Action {
  readonly type = ActionTypes.RECOVER_SUCCESS
  constructor(public payload: any) { }
}

// Recover Failure TODO types
export class RecoverFailureAction implements Action {
  readonly type = ActionTypes.RECOVER_FAILURE
  constructor(public payload: {[key: string]: any, error: any}) { }
}


export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | RecoverAction
  | RecoverSuccessAction
  | RecoverFailureAction
