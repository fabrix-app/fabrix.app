import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromHome from './home'

import * as fromEvents from './events'

/**
 * Default State
 */
export interface State {
  home: fromHome.State,
  events: fromEvents.State
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  home: fromHome.reducer,
  events: fromEvents.reducer
}

// In this function dynamic state slices, if they exist, will overwrite static state at runtime.
export function getInitialState() {
  return {
    home: fromHome.initialState,
    events: fromEvents.initialState
  }
}

/**
 * Home State
 */
export const getHomeState = createFeatureSelector<any>('home')

/**
 * Events Events State
 */
export const getHomeEventsState = createSelector(getHomeState, (state) => state['events'])
export const getEventsAll = createSelector(getHomeEventsState, fromEvents.getAll)
export const getEventsLoaded = createSelector(getHomeEventsState, fromEvents.getLoaded)
export const getEventsLoading = createSelector(getHomeEventsState, fromEvents.getLoading)
export const getEventsPagination = createSelector(getHomeEventsState, fromEvents.getPagination)
export const getEventsEntities = createSelector(getHomeEventsState, fromEvents.getEntities)
export const getEventsSelected = createSelector(getHomeEventsState, fromEvents.getSelected)
