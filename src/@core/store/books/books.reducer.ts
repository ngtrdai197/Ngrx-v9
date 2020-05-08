import { createReducer, Action, on } from '@ngrx/store'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import * as bookActions from './books.action'
import { IBook } from '@/interfaces/book.interface'

export interface BookState extends EntityState<IBook> {
  book: IBook
  loading: boolean
  error: { [key: string]: any }
}

const selectId = (book: IBook) => book.id

const sortByName = (firstBook: IBook, secondBook: IBook) =>
  firstBook.title.localeCompare(secondBook.title)

export const adapterBook: EntityAdapter<IBook> = createEntityAdapter({
  selectId,
  sortComparer: sortByName,
})

const initBookState: BookState = adapterBook.getInitialState({
  book: {
    id: '10',
    title: 'Single Book',
    description: 'Description of single book',
    authors: ['Nguyen Dai', 'Nguyen Loc'],
  },
  entities: [],
  error: null,
  ids: [],
  loading: false,
})

const booksReducer = createReducer(
  initBookState,
  on(bookActions.getBooks, (state) => state),
  on(bookActions.getBooksSuccess, (state, { books, loading }) => {
    return adapterBook.setAll(books, { ...state, loading })
  }),
  on(bookActions.createBook, (state, { book }) => {
    return adapterBook.addOne(book, state)
  }),
  on(bookActions.deleteBook, (state, { id }) => {
    return adapterBook.removeOne(id, state)
  }),
  on(bookActions.updateBook, (state, { book }) => {
    return adapterBook.updateOne(book, state)
  }),
  on(bookActions.updateManyBook, (state, { books }) => {
    return adapterBook.updateMany(books, state)
  })
)

export const booksFeatureKey = 'bookState'
export function reducer(state: BookState | undefined, action: Action) {
  return booksReducer(state, action)
}
