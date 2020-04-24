import { createReducer, Action, on } from '@ngrx/store'

import * as bookActions from './books.action'
import { Book } from '@/interfaces/book.interface'

export interface BookState {
	books: Book[]
	book: Book
	loading: boolean
	error: { [key: string]: any }
}

const initBookState: BookState = {
	books: [],
	book: null,
	loading: false,
	error: null,
}

const booksReducer = createReducer(
	initBookState,
	on(bookActions.getBooks, (state) => state),
	on(bookActions.getBooksSuccess, (state, { books, error, loading }) => ({
		...state,
		books,
		loading,
		error,
	})),
	on(bookActions.createBook, (state, { book }) => ({
		...state,
		books: [...state.books, book],
	}))
)

export const booksFeatureKey = 'bookState'
export function reducer(state: BookState | undefined, action: Action) {
	return booksReducer(state, action)
}
