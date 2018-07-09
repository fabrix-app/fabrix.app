import { Action } from '@ngrx/store'
import { type } from '../../../utils/type.util'

export const ActionTypes = {
  SET_TITLE:   type('[App] Set Title'),
  LOAD_PACK:   type('[App] Load Pack'),
  UNLOAD_PACK: type('[App] Unload Pack'),
  LOAD_PACKS_COMPLETE: type('[App] Load Packs Complete'),
  UPDATE_NAVIGATION: type('[App] Update Navigation')
}

// Set Title
export class SetTitleAction implements Action {
  type = ActionTypes.SET_TITLE
  constructor(public payload: any) { }
}

// App Load Pack
export class LoadPackAction implements Action {
  type = ActionTypes.LOAD_PACK
  constructor(public payload: {pack: any}) { }
}

// App Load Pack
export class UnloadPackAction implements Action {
  type = ActionTypes.LOAD_PACK
  constructor(public payload: {id: string}) { }
}

// App Load Packs Complete
export class LoadPacksCompleteAction implements Action {
  type = ActionTypes.LOAD_PACKS_COMPLETE
  constructor(public payload: boolean) { }
}

// App Update Navigation
export class UpdateNavigationAction implements Action {
  type = ActionTypes.UPDATE_NAVIGATION
  constructor(public payload: any) { }
}

export type Actions
  = SetTitleAction
  | LoadPackAction
  | UnloadPackAction
  | LoadPacksCompleteAction
  | UpdateNavigationAction
