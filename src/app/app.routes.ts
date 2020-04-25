import { Routes } from '@angular/router'
import { DefaultLayoutComponent } from '@shared/components'

export const appRoutes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@/home-page/home-page.module').then((m) => m.HomePageModule),
      },
      {
        path: 'books',
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
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('@/auth/auth.module').then((m) => m.AuthModule),
  },
]
