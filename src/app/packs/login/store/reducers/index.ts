import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store'
import * as fromLogin from './login'
import * as fromLoginForm from './login-form'
import * as fromForgotPasswordForm from './forgot-password-form'

/**
 * Default State
 */
export interface State {
  login: fromLogin.State,
  loginForm: fromLoginForm.State,
  forgotPasswordForm: fromForgotPasswordForm.State
}

/**
 * Default Reducers
 */
export const reducers = { // : ActionReducerMap<State> = {
  login: fromLogin.reducer,
  loginForm: fromLoginForm.reducer,
  forgotPasswordForm: fromForgotPasswordForm.reducer
}

// In this function dynamic state slices, if they exist, will overwrite static state at runtime.
export function getInitialState() {
  return {
    login: fromLogin.initialState,
    loginForm: fromLoginForm.initialState,
    forgotPasswordForm: fromForgotPasswordForm.initialState
  }
}

/**
 * Login State
 */
export const getLoginState = createFeatureSelector<any>('login')

export const getLoginLoginState = createSelector(getLoginState, (state) => state['login'])
export const getLoginLoginLoading = createSelector(getLoginLoginState, fromLogin.getLoading)

/**
 * Login Form State
 */
export const getLoginLoginFormState = createSelector(getLoginState, (state) => state['loginForm'])

/**
 * Forgot Password Form State
 */
export const getLoginForgotPasswordFormState = createSelector(getLoginState, (state) => state['forgotPasswordForm'])
