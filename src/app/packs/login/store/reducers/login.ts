import * as actions from '../actions/login'

export interface State {
  loading: boolean
  error: string | null
}

export const initialState: State = {
  loading: false,
  error: null
}


export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.LOGIN: {
      return {
        ...state,
        loading: true
      }
    }
    case actions.ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false
      }
    }
    case actions.ActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    default: {
      return state
    }
  }
}

export const getState = (state: State) => state
export const getLoading = (state: State) => state['loading']
