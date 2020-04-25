import { createReducer, Action, on } from '@ngrx/store'

import * as authActions from './auth.action'
import { IUser } from '@/interfaces'

export interface AuthState {
  user: IUser
  token: string
  loading: boolean
  error: { [key: string]: any }
}

const initBookState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
}

const authReducer = createReducer(
  initBookState,
  on(authActions.onLoginsSuccess, (state, { authState }) => ({
    ...state,
    ...authState,
  })),
  on(authActions.onLoginsFailed, (state, { authState }) => ({
    ...state,
    ...authState,
  }))
)

export const authFeatureKey = 'authState'
export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action)
}
