import { createSelector, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import * as fromApp from './app'
import * as fromAuth from './auth'

/**
 * Default State
 */
export interface State {
  [key: string]: Object
  app: fromApp.State,
  auth: fromAuth.State,
  router: RouterReducerState
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  auth: fromAuth.reducer,
  router: routerReducer
}


// In this function dynamic state slices, if they exist, will overwrite static state at runtime.
export function getInitialState() {
  return {
    app: fromApp.initialState,
    auth: fromAuth.initialState
  }
}

/**
 * App State
 */
export const getAppState = (state: State) => state.app

/**
 * App Navigation
 */
export const getAppNavigationState = (state: State) => state.app.navigation

/**
 * App State
 */
export const getAuthState = (state: State) => state.auth
export const getAuthLoading = createSelector(getAuthState, fromAuth.getLoading)
export const getAuthLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn)
export const getAuthUser = createSelector(getAuthState, fromAuth.getUser)

/**
 * Router State
 */
export const getRouterState = (state: State) => state.router

/**
 * TO CONSOLE Logger
 * @param {ActionReducer<{}>} reducer
 * @returns {ActionReducer<{}>}
 */
export function logger(reducer: ActionReducer<{}>): ActionReducer<{}> {
  return function(state: {}, action: any): {} {
    console.log('state', state)
    console.log('action', action)
    return reducer(state, action)
  }
}

/**
 * Meta Reducers
 */
export const metaReducers: MetaReducer<{}>[] = [logger]
