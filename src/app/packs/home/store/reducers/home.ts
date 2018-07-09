import { homeActions } from '../actions'

export interface State {
  title: string | null,
  fabrix: {
    app?: string
    libs?: {}
    node?: string
    trailpacks?: any[]
  }
  loading: boolean
  error: string | null
}

export const initialState: State = {
  title: null,
  fabrix: {},
  loading: false,
  error: null
}


export function reducer(state = initialState, action: homeActions.Actions): State {
  switch (action.type) {
    case homeActions.ActionTypes.HELLO_WORLD: {
      return Object.assign({}, state, {title: action.payload })
    }
    case homeActions.ActionTypes.FABRIX: {
      return Object.assign({}, state, {loading: true })
    }
    case homeActions.ActionTypes.FABRIX_SUCCESS: {
      return Object.assign({}, state, {loading: false, fabrix: action.payload })
    }
    case homeActions.ActionTypes.FABRIX_FAILED: {
      return Object.assign({}, state, {loading: false, error: action.payload })
    }
    default: {
      return state
    }
  }
}
