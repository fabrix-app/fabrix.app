import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromDocs from './docs'

/**
 * Default State
 */
export interface State {
  docs: fromDocs.State
}

/**
 * Default Reducers
 */
export const reducers: ActionReducerMap<State> = {
  docs: fromDocs.reducer
}

// In this function dynamic state slices, if they exist, will overwrite static state at runtime.
export function getInitialState() {
  return {
    docs: fromDocs.initialState
  }
}

/**
 * Doc State
 */
export const getDocState = createFeatureSelector<any>('doc')

/**
 * Docs Docs State
 */
export const getDocDocsState = createSelector(getDocState, (state) => state['docs'])
export const getDocsAll = createSelector(getDocDocsState, fromDocs.getAll)
export const getDocsLoaded = createSelector(getDocDocsState, fromDocs.getLoaded)
export const getDocsLoading = createSelector(getDocDocsState, fromDocs.getLoading)
export const getDocsPagination = createSelector(getDocDocsState, fromDocs.getPagination)
export const getDocsEntities = createSelector(getDocDocsState, fromDocs.getEntities)
export const getDocsSelected = createSelector(getDocDocsState, fromDocs.getSelected)
