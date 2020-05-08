import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppState } from '..'
import { booksFeatureKey, BookState } from './books.reducer'
import { adapterBook } from './books.reducer'

const selectFeature = createFeatureSelector<AppState, BookState>(
  booksFeatureKey
)

export const selectBookState = createSelector(
  selectFeature,
  (state: BookState) => state
)

const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapterBook.getSelectors(selectFeature)

export const selectBooks = createSelector(
  selectFeature,
  (state: BookState) => state
)

export const selectBook = createSelector(
  selectFeature,
  (state: BookState) => state.book
)

export const selectAllBooks = selectAll
export const selectBookEntities = selectEntities
export const selectBookIds = selectIds
export const selectUserTotal = selectTotal
