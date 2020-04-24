import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { takeUntil, finalize } from 'rxjs/operators'
import { Subject } from 'rxjs'

import * as bookActions from '@/store/books/books.action'
import * as bookSelector from '@/store/books/books.selector'
import { Book } from '@/interfaces/book.interface'
import { AppState } from '@/store/root.state'

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
	// newBook: Book = {
	// 	name: 'Book 3',
	// 	price: 15000,
	// }

	constructor(private readonly store: Store) {}

	ngOnInit() {
		// this.store.dispatch(bookActions.createBook({ book: this.newBook }))
		this.store.dispatch(bookActions.getBooks())
		this.loading.books = true
		this.store
			.pipe(select(bookSelector.selectBooks), takeUntil(this.ngDestroyed$))
			.subscribe((state) => console.log('state', state))
		this.store
			.pipe(select(bookSelector.selectBookState))
			.subscribe(({ loading }) => (this.loading.books = loading))
	}

	ngOnDestroy() {
		this.ngDestroyed$.next()
		this.ngDestroyed$.complete()
	}
}
