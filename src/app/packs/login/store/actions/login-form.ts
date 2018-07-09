import { Action } from '@ngrx/store'

export enum ActionTypes {
  // BACKEND
  INITIALIZE = '[Login Form] Initialize',
  RESET =      '[Login Form] Reset',
  SAVE =       '[Login Form] Save',
}

// Login Form Initialize
export class InitializeAction implements Action {
  readonly type = ActionTypes.INITIALIZE
  constructor(public payload: any) { }
}
// Rest the Form
export class ResetAction implements Action {
  readonly type = ActionTypes.RESET
  constructor(public payload: any) { }
}

export class SaveAction implements Action {
  readonly type = ActionTypes.SAVE
  constructor(public payload: any) { }
}

export type Actions
  = InitializeAction
  | ResetAction
  | SaveAction

