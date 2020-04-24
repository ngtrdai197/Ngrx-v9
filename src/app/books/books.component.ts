import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { takeUntil, finalize } from 'rxjs/operators'
import { Subject, Observable } from 'rxjs'

import * as bookActions from '@/store/books/books.action'
import * as bookSelector from '@/store/books/books.selector'
import { Book } from '@/interfaces/book.interface'

@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
	public loading: {
		[key: string]: boolean
	} = {}
	private ngDestroyed$ = new Subject()
	books$: Observable<Book[]>

	constructor(private readonly store: Store) {}

	ngOnInit() {
		this.store.dispatch(bookActions.getBooks())
		this.books$ = this.store.pipe(
			select(bookSelector.selectBooks),
			takeUntil(this.ngDestroyed$)
		)
	}

	ngOnDestroy() {
		this.ngDestroyed$.next()
		this.ngDestroyed$.complete()
	}

	public addNewBook() {
		const newBook: Book = {
			title: 'Book 3',
			authors: ['Nguyen Dai'],
			description: 'Test description',
		}
		this.store.dispatch(bookActions.createBook({ book: newBook }))
	}

	public trackByFn(index, item) {
		return index
	}
}
