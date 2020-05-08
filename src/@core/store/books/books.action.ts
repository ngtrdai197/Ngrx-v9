import { createAction, props } from '@ngrx/store'

import { IBook } from '@/interfaces/book.interface'
import { Update } from '@ngrx/entity'

export const getBooks = createAction('[Books Page] Load Books')

export const getBooksSuccess = createAction(
  '[Books Page] Load Books Success',
  props<{ books: IBook[]; loading: boolean }>()
)

export const getBooksFailed = createAction(
  '[Books Page] Load Books Failed',
  props<{ books: IBook[]; loading: boolean; error: { [key: string]: any } }>()
)

export const createBook = createAction(
  '[Books Page] Create Book',
  props<{ book: IBook }>()
)

export const createListBook = createAction(
  '[Books Page] Create List Book',
  props<{ books: IBook[] }>()
)

export const deleteBook = createAction(
  '[Books Page] Delete Book',
  props<{ id: string }>()
)

export const deleteManyBook = createAction(
  '[Books Page] Delete Many Book',
  props<{ ids: string[] }>()
)

export const updateBook = createAction(
  '[Books Page] Update Book',
  props<{ book: Update<IBook> }>()
)

export const updateManyBook = createAction(
  '[Books Page] Update Many Book',
  props<{ books: Array<Update<IBook>> }>()
)

export const upsertBook = createAction(
  '[Books Page] Upsert Book',
  props<{ book: IBook }>()
)

export const upsertManyBook = createAction(
  '[Books Page] Upsert Many Book',
  props<{ books: IBook[] }>()
)
