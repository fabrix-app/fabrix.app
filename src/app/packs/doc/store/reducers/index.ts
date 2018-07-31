import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromEvents from './docs'

/**
 * Default State
 */
export interface State {
  events: fromEvents.State
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  events: fromEvents.reducer
}

// In this function dynamic state slices, if they exist, will overwrite static state at runtime.
export function getInitialState() {
  return {
    events: fromEvents.initialState
  }
}

/**
 * Doc State
 */
export const getDocState = createFeatureSelector<any>('doc')

/**
 * Events Events State
 */
export const getDocEventsState = createSelector(getDocState, (state) => state['events'])
export const getEventsAll = createSelector(getDocEventsState, fromEvents.getAll)
export const getEventsLoaded = createSelector(getDocEventsState, fromEvents.getLoaded)
export const getEventsLoading = createSelector(getDocEventsState, fromEvents.getLoading)
export const getEventsPagination = createSelector(getDocEventsState, fromEvents.getPagination)
export const getEventsEntities = createSelector(getDocEventsState, fromEvents.getEntities)
export const getEventsSelected = createSelector(getDocEventsState, fromEvents.getSelected)
