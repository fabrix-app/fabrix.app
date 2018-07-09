import { createSelector } from '@ngrx/store'
import * as actions from '../actions/events'
import { Event } from '../../models/Event'

export interface State {
  loaded: boolean
  loading: boolean
  ids: string[]
  entities: { [ids: string]: Event }
  selectedEventId: number | null
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
  selectedEventId: null,
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

    case actions.ActionTypes.FIND_ALL:
    case actions.ActionTypes.SEARCH: {
      return {
        ...state,
        loaded: false,
        loading: true,
        filter: action.payload.filter || state.filter,
        sort: action.payload.sort || state.sort,
        includes: action.payload.includes || state.includes,
      }
    }

    case actions.ActionTypes.FIND_ALL_SUCCESS:
    case actions.ActionTypes.SEARCH_SUCCESS: {
      const events = action.payload.rows
      const pagination = action.payload.pagination

      const newEventIds = events.map(event => event.id)
      const newEventEntities = events.reduce((entities: { [id: string]: Event }, event: Event) => {

        return Object.assign(entities, {
          [event.id]: event
        })
      }, {})

      return {
        ...state,
        loaded: true,
        loading: false,
        ids: [ ...newEventIds ],
        entities: newEventEntities,
        total: pagination.total,
        offset: pagination.offset,
        limit: pagination.limit,
        page: pagination.page,
        pages: pagination.pages,
        filter: pagination.filter,
        sort: pagination.sort
      }

    }

    // case actions.ActionTypes.LOAD:
    case actions.ActionTypes.FIND_ONE_SUCCESS: {

      const event = action.payload

      const events = Object.assign({}, state.entities, {
        [event.id]: event
      })

      return Object.assign({}, state, {
        ...state,
        loading: false,
        loaded: true,
        ids: Object.keys(events),
        entities: events,
        selectedEventId: event.id
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
        selectedEventId: action.payload.id
      }
    }

    case actions.ActionTypes.SELECT: {
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedEventId: action.payload
      }
    }

    case actions.ActionTypes.DESELECT: {
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedEventId: null
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
export const getSelectedId = (state: State) => state['selectedEventId']

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId]
})
/** Get All Events */
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
