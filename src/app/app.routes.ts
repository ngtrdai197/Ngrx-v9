import { Routes } from '@angular/router'

export const appRoutes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@/books/books.module').then((m) => m.BooksModule),
	},
	{
		path: 'conversation',
		loadChildren: () =>
			import('@/conversation/conversation.module').then(
				(m) => m.ConversationModule
			),
	},
]
