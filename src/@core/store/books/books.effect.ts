import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

import * as bookActions from './books.action'
import { BookService } from '@core/services/book.service'

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.getBooks),
      mergeMap(() =>
        this.bookService.loadBooks().pipe(
          map((books) => {
            return bookActions.getBooksSuccess({
              books,
              loading: false,
            })
          }),
          catchError((error) =>
            of(bookActions.getBooksFailed({ books: [], loading: false, error }))
          )
        )
      )
    )
  )

  constructor(private actions$: Actions, private bookService: BookService) {}
}
