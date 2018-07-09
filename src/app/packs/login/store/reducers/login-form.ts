import { Action, combineReducers } from '@ngrx/store'
import * as actions from '../actions/login-form'

import {
  cast,
  createFormGroupReducerWithUpdate,
  createFormGroupState,
  disable,
  enable,
  FormGroupState,
  formGroupReducer,
  updateGroup,
  validate,
} from 'ngrx-forms'
import { equalTo, minLength, required, requiredTrue, email } from 'ngrx-forms/validation'

// import { State as RootState } from '../app.reducer'

export interface FormValue {
  email: string | null
  password: string | null
  remember_me: boolean | null
}

export interface State {
  loginForm: {
    formState: FormGroupState<FormValue>
  }
}

export const FORM_ID = 'loginForm'

export const initialState = createFormGroupState<FormValue>(FORM_ID, {
  email: null,
  password: null,
  remember_me: true
})

// const validationFormGroupReducer = createFormGroupReducerWithUpdate<FormValue>({
//   email: validate<string>([required, email]) // validate(required)
// })


// export function reducer(_s: any, _a: any) {
//   return combineReducers({
//     formState(s = INITIAL_STATE, a: Action) {
//       return validationFormGroupReducer(s, a)
//     },
//   })(_s, _a)
// }

export function reducer(state = initialState, action: actions.Actions) {

  const _validationFormGroupReducer = updateGroup<FormValue>({
    // TODO ENABLE AFTER TESTING
    //email: validate<string>([required, email]),
    password: validate<string>([required, minLength(6)])
  })

  switch (action.type) {

    case actions.ActionTypes.INITIALIZE:
    case actions.ActionTypes.RESET: {
      state = createFormGroupState<FormValue>(FORM_ID, {
        email: action.payload['email'] || null,
        password: action.payload['password'] || null,
        remember_me: action.payload['remember_me'] || true
      })
      break
    }

    default: {
      state = formGroupReducer(state, action)
    }
  }
  return _validationFormGroupReducer(state)
}
