import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import * as bookSelector from '@/store/books/books.selector'

@Component({
	selector: 'app-conversation',
	templateUrl: './conversation.component.html',
	styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
	constructor(private store: Store) {}

	ngOnInit() {
		this.store
			.pipe(select(bookSelector.selectBooks))
			.subscribe((state) => console.log('state', state))
	}
}
