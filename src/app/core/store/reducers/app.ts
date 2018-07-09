import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { appActions } from '../actions'

export interface App {
  id: string
  name: string
  config: Object
}

export interface State extends EntityState<App> {
  title: string | null,
  ready: boolean,
  navigation: {}
}

export const adapter: EntityAdapter<App> = createEntityAdapter<App>()

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  title: null,
  ready: false,
  navigation: {}
})


export function reducer(state = initialState, action:  appActions.Actions): State {
  switch (action.type) {
    case  appActions.ActionTypes.SET_TITLE: {
      return Object.assign({}, state, {title: action.payload.title})
    }
    case appActions.ActionTypes.LOAD_PACK: {
      return adapter.addOne(action.payload.pack, state)
    }
    case appActions.ActionTypes.UNLOAD_PACK: {
      return adapter.removeOne(action.payload.id, state)
    }
    case appActions.ActionTypes.LOAD_PACKS_COMPLETE: {
      return Object.assign({}, state, {ready: action.payload})
    }
    case appActions.ActionTypes.UPDATE_NAVIGATION: {
      return Object.assign({}, state, {navigation: action.payload})
    }

    default: {
      return state
    }
  }
}

export const getTitle = (state: State) => state.title
