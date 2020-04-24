import { createAction, props } from '@ngrx/store'

import { Book } from '@/interfaces/book.interface'

export const getBooks = createAction('[Books Page] Load Books')

export const getBooksSuccess = createAction(
	'[Books Page] Get Books Success',
	props<{ books: Book[]; loading: boolean; error: { [key: string]: any } }>()
)

export const getBooksFailed = createAction(
	'[Books Page] Get Books Failed',
	props<{ books: Book[]; loading: boolean; error: { [key: string]: any } }>()
)

export const createBook = createAction(
	'[Books Page] Create Book',
	props<{ book: Book }>()
)
