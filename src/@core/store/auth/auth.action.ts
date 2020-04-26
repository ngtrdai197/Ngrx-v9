import { createAction, props } from '@ngrx/store'

import { AuthState } from './auth.reducer'
import { ILogin } from '@/interfaces'

export const onLogin = createAction(
  '[Login Page] On Login',
  props<{ login: ILogin }>()
)

export const onLoginsSuccess = createAction(
  '[Login Page] On Login Success',
  props<{ authState: AuthState }>()
)

export const onLoginsFailed = createAction(
  '[Login Page] On Login Failed',
  props<{ authState: AuthState }>()
)
