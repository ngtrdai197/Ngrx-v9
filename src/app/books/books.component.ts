import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { takeUntil, finalize } from 'rxjs/operators'
import { Subject, Observable } from 'rxjs'

import * as bookActions from '@core/store/books/books.action'
import * as bookSelector from '@core/store/books/books.selector'
import { IBook } from '@/interfaces/book.interface'
import { BaseComponent } from '@shared/components/base/base.component'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent extends BaseComponent implements OnInit {
  books$: Observable<IBook[]>

  constructor(private readonly store: Store) {
    super()
  }

  ngOnInit() {
    this.store.dispatch(bookActions.getBooks())
    this.books$ = this.store.pipe(
      select(bookSelector.selectAllBooks),
      takeUntil(this.ngDestroyed$)
    )
    this.store
      .pipe(select(bookSelector.selectUserTotal), takeUntil(this.ngDestroyed$))
      .subscribe((total) => {
        console.log('total', total)
      })

    this.store
      .pipe(select(bookSelector.selectBook), takeUntil(this.ngDestroyed$))
      .subscribe((book) => {
        console.log('book', book)
      })
  }

  public updateBook(id: string) {
    this.store.dispatch(
      bookActions.updateBook({
        book: {
          id,
          changes: {
            title: 'Book Update',
            authors: ['Nguyen Tr Dai'],
            description: 'Update description',
          },
        },
      })
    )
  }

  public addNewBook() {
    const newBook: IBook = {
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
      title: 'Book 3',
      authors: ['Nguyen Dai'],
      description: 'Test description',
    }
    this.store.dispatch(bookActions.createBook({ book: newBook }))
  }
}
