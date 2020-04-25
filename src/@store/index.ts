import { BookState } from './books/books.reducer'
import { AuthState } from './auth/auth.reducer'

export interface AppState {
  bookState: BookState
  authState: AuthState
}
