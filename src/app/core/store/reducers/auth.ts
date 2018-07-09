import { Actions, ActionTypes } from '../actions/auth'
import { User } from '../../models/User'

export interface State {
  loading: boolean
  loggedIn: boolean
  user: User | null
}

export const initialState: State = {
  loading: false,
  loggedIn: false,
  user: null,
}

export function reducer(state = initialState, action: Actions): State {

  switch (action.type) {
    case ActionTypes.LOGIN:
    case ActionTypes.LOGOUT:
    case ActionTypes.RECOVER:
    case ActionTypes.SESSION: {
      return {
        ...state,
        loading: true
      }
    }

    case ActionTypes.LOGIN_REDIRECT: {
      return  {
        ...state,
        loading: false
      }
    }

    case ActionTypes.LOGIN_FAILURE:
    case ActionTypes.LOGOUT_FAILURE:
    case ActionTypes.RECOVER_FAILURE:
    case ActionTypes.SESSION_FAILURE: {
      return {
        ...state,
        loading: false
      }
    }

    case ActionTypes.RECOVER_SUCCESS: {
      // TODO handle recovery
      return {
        ...state,
        loading: false
      }
    }

    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.SESSION_SUCCESS: {
      console.log('AUTH SUCCESS', action.payload)
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
        loading: false
      }
    }

    case ActionTypes.LOGOUT_SUCCESS: {
      return initialState
    }

    default: {
      // console.log('action', action.type, action.payload)
      return state
    }
  }
}

export const getLoading = (state: State) => state.loading
export const getLoggedIn = (state: State) => state.loggedIn
export const getUser = (state: State) => state.user
