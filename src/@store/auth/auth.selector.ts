import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppState } from '..'
import { authFeatureKey, AuthState } from './auth.reducer'

const selectFeature = createFeatureSelector<AppState, AuthState>(authFeatureKey)

export const selectAuthState = createSelector(
  selectFeature,
  (state: AuthState) => state
)

export const selectUser = createSelector(
  selectFeature,
  (state: AuthState) => state.user
)

export const selectToken = createSelector(
  selectFeature,
  (state: AuthState) => state.token
)
