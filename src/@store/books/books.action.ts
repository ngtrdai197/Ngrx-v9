import { createAction, props } from '@ngrx/store'

import { IBook } from '@/interfaces/book.interface'

export const getBooks = createAction('[Books Page] Load Books')

export const getBooksSuccess = createAction(
  '[Books Page] Load Books Success',
  props<{ books: IBook[]; loading: boolean; error: { [key: string]: any } }>()
)

export const getBooksFailed = createAction(
  '[Books Page] Load Books Failed',
  props<{ books: IBook[]; loading: boolean; error: { [key: string]: any } }>()
)

export const createBook = createAction(
  '[Books Page] Create Book',
  props<{ book: IBook }>()
)
