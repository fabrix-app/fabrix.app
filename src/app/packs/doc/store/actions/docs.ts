import { Action } from '@ngrx/store'
import { Doc } from '../../models/Doc'
import { DocQuery } from '../../models/DocQuery'

export enum ActionTypes {
  // BACKEND
  FIND_ALL =                       '[Doc] Find All',
  FIND_ALL_SUCCESS =               '[Doc] Find All Success',
  FIND_ALL_FAILURE =               '[Doc] Find All Failure',
  SEARCH =                         '[Doc] Search',
  SEARCH_SUCCESS =                 '[Doc] Search Success',
  SEARCH_FAILURE =                 '[Doc] Search Failure',
  FIND_ONE =                       '[Doc] Find One',
  FIND_ONE_SUCCESS =               '[Doc] Find One Success',
  FIND_ONE_FAILURE =               '[Doc] Find One Failure',

  // UTILITIES
  LOAD =                           '[Doc] Load',
  SELECT =                         '[Doc] Select',
  DESELECT =                       '[Doc] Deselect'
}

// Docs Find All
export class FindAllAction implements Action {
  readonly type = ActionTypes.FIND_ALL
  constructor(public payload: DocQuery) { }
}

export class FindAllSuccessAction implements Action {
  readonly type = ActionTypes.FIND_ALL_SUCCESS
  constructor(public payload: any) { }
}

export class FindAllFailureAction implements Action {
  readonly type = ActionTypes.FIND_ALL_FAILURE
  constructor(public payload: any) { }
}

// Docs Search
export class SearchAction implements Action {
  readonly type = ActionTypes.SEARCH
  constructor(public payload: DocQuery) { }
}

export class SearchSuccessAction implements Action {
  readonly type = ActionTypes.SEARCH_SUCCESS
  constructor(public payload: any) { }
}

export class SearchFailureAction implements Action {
  readonly type = ActionTypes.SEARCH_FAILURE
  constructor(public payload: any) { }
}

// Doc Find One
export class FindOneAction implements Action {
  readonly type = ActionTypes.FIND_ONE
  constructor(public payload: Doc['id']) { }
}

export class FindOneSuccessAction implements Action {
  readonly type = ActionTypes.FIND_ONE_SUCCESS
  constructor(public payload: Doc) { }
}

export class FindOneFailureAction implements Action {
  readonly type = ActionTypes.FIND_ONE_FAILURE
  constructor(public payload: any) { }
}

// Doc Load
export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD
  constructor(public payload: Doc) { }
}
// Doc Select/Deselect
export class SelectAction implements Action {
  readonly type = ActionTypes.SELECT
  constructor(public payload: Doc['id']) { }
}
export class DeselectAction implements Action {
  readonly type = ActionTypes.DESELECT
  constructor(public payload: any) { }
}

export type Actions
  = FindAllAction
  | FindAllSuccessAction
  | FindAllFailureAction
  | SearchAction
  | SearchSuccessAction
  | SearchFailureAction
  | FindOneAction
  | FindOneSuccessAction
  | FindOneFailureAction
  | LoadAction
  | SelectAction
  | DeselectAction
