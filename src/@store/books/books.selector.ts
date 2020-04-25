import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppState } from '..'
import { booksFeatureKey, BookState } from './books.reducer'

const selectFeature = createFeatureSelector<AppState, BookState>(
  booksFeatureKey
)

export const selectBookState = createSelector(
  selectFeature,
  (state: BookState) => state
)

export const selectBooks = createSelector(
  selectFeature,
  (state: BookState) => state.books
)

export const selectBook = createSelector(
  selectFeature,
  (state: BookState) => state.book
)
