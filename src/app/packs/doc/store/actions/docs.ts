import { Action } from '@ngrx/store'
import { Event } from '../../models/Event'
import { EventQuery } from '../../models/EventQuery'

export enum ActionTypes {
  // BACKEND
  FIND_ALL =                       '[Doc Event] Find All',
  FIND_ALL_SUCCESS =               '[Doc Event] Find All Success',
  FIND_ALL_FAILURE =               '[Doc Event] Find All Failure',
  SEARCH =                         '[Doc Event] Search',
  SEARCH_SUCCESS =                 '[Doc Event] Search Success',
  SEARCH_FAILURE =                 '[Doc Event] Search Failure',
  FIND_ONE =                       '[Doc Event] Find One',
  FIND_ONE_SUCCESS =               '[Doc Event] Find One Success',
  FIND_ONE_FAILURE =               '[Doc Event] Find One Failure',

  // UTILITIES
  LOAD =                           '[Doc Event] Load',
  SELECT =                         '[Doc Event] Select',
  DESELECT =                       '[Doc Event] Deselect'
}

// Events Find All
export class FindAllAction implements Action {
  readonly type = ActionTypes.FIND_ALL
  constructor(public payload: EventQuery) { }
}

export class FindAllSuccessAction implements Action {
  readonly type = ActionTypes.FIND_ALL_SUCCESS
  constructor(public payload: any) { }
}

export class FindAllFailureAction implements Action {
  readonly type = ActionTypes.FIND_ALL_FAILURE
  constructor(public payload: any) { }
}

// Events Search
export class SearchAction implements Action {
  readonly type = ActionTypes.SEARCH
  constructor(public payload: EventQuery) { }
}

export class SearchSuccessAction implements Action {
  readonly type = ActionTypes.SEARCH_SUCCESS
  constructor(public payload: any) { }
}

export class SearchFailureAction implements Action {
  readonly type = ActionTypes.SEARCH_FAILURE
  constructor(public payload: any) { }
}

// Event Find One
export class FindOneAction implements Action {
  readonly type = ActionTypes.FIND_ONE
  constructor(public payload: Event['id']) { }
}

export class FindOneSuccessAction implements Action {
  readonly type = ActionTypes.FIND_ONE_SUCCESS
  constructor(public payload: Event) { }
}

export class FindOneFailureAction implements Action {
  readonly type = ActionTypes.FIND_ONE_FAILURE
  constructor(public payload: any) { }
}

// Event Load
export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD
  constructor(public payload: Event) { }
}
// Event Select/Deselect
export class SelectAction implements Action {
  readonly type = ActionTypes.SELECT
  constructor(public payload: Event['id']) { }
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
