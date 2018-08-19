import { createSelector } from '@ngrx/store'
import * as actions from '../actions/docs'
import { Doc } from '../../models/Doc'

export interface State {
  loaded: boolean
  loading: boolean
  ids: string[]
  entities: { [ids: string]: Doc }
  selectedDocId: number | null
  total: number
  offset: number
  limit: number
  page: number
  pages: number
  filter: any
  sort: [string[]]
  includes: string[] | null
  error: string | null
}

export const initialState: State = {
  loaded: true,
  loading: false,
  ids: [],
  entities: {},
  selectedDocId: null,
  total: 0,
  offset: 0,
  limit: 10,
  page: 1,
  pages: 0,
  filter: null,
  sort: [['created_at', 'DESC']],
  includes: null,
  error: null
}

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {


    case actions.ActionTypes.FIND_ONE: {
      return {
        ...state,
        loaded: false,
        loading: true
      }
    }

    // case actions.ActionTypes.FIND_ALL:
    // case actions.ActionTypes.SEARCH: {
    //   return {
    //     ...state,
    //     loaded: false,
    //     loading: true,
    //     filter: action.payload.filter || state.filter,
    //     sort: action.payload.sort || state.sort,
    //     includes: action.payload.includes || state.includes,
    //   }
    // }
    //
    // case actions.ActionTypes.FIND_ALL_SUCCESS:
    // case actions.ActionTypes.SEARCH_SUCCESS: {
    //   const docs = action.payload.rows
    //   const pagination = action.payload.pagination
    //
    //   const newDocIds = docs.map(doc => doc.id)
    //   const newDocEntities = docs.reduce((entities: { [id: string]: Doc }, doc: Doc) => {
    //
    //     return Object.assign(entities, {
    //       [doc.id]: doc
    //     })
    //   }, {})
    //
    //   return {
    //     ...state,
    //     loaded: true,
    //     loading: false,
    //     ids: [ ...newDocIds ],
    //     entities: newDocEntities,
    //     total: pagination.total,
    //     offset: pagination.offset,
    //     limit: pagination.limit,
    //     page: pagination.page,
    //     pages: pagination.pages,
    //     filter: pagination.filter,
    //     sort: pagination.sort
    //   }
    //
    // }

    // case actions.ActionTypes.LOAD:
    case actions.ActionTypes.FIND_ONE_SUCCESS: {

      const doc = action.payload

      const docs = Object.assign({}, state.entities, {
        [doc.id]: doc
      })

      return Object.assign({}, state, {
        ...state,
        loading: false,
        loaded: true,
        ids: Object.keys(docs),
        entities: docs,
        selectedDocId: doc.id
      })
    }

    case actions.ActionTypes.FIND_ALL_FAILURE:
    case actions.ActionTypes.SEARCH_FAILURE:
    case actions.ActionTypes.FIND_ONE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }

    // Utilities
    case actions.ActionTypes.LOAD: {
      console.log('LOAD', action.payload)

      return {
        ...state,
        loading: false,
        loaded: true,
        selectedDocId: action.payload.id
      }
    }

    case actions.ActionTypes.SELECT: {
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedDocId: action.payload
      }
    }

    case actions.ActionTypes.DESELECT: {
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedDocId: null
      }
    }

    default: {
      return state
    }
  }
}

export const getState = (state: State) => state
export const getLoaded = (state: State) => state['loaded']
export const getLoading = (state: State) => state['loading']
export const getIds = (state: State) => state['ids']
export const getEntities = (state: State) => state['entities']
export const getSelectedId = (state: State) => state['selectedDocId']

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId]
})
/** Get All Docs */
export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id])
})

/** Pagination */
export const getPagination = createSelector(getState, (state) => {
  return {
    total: state.total,
    limit: state.limit,
    offset: state.offset,
    page: state.page,
    pages: state.pages,
    sort: state.sort,
    includes: state.includes,
    filter: state.filter
  }
})
