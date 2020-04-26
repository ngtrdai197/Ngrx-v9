import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DashBoardBooksComponent } from './dash-board-books/dash-board-books.component'
import { RouterModule, Routes } from '@angular/router'
import { IconsProviderModule } from '@/icons-provider.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzNotificationModule } from 'ng-zorro-antd/notification'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzMentionModule } from 'ng-zorro-antd/mention'
import { NzEmptyModule } from 'ng-zorro-antd/empty'

import { SharedModule } from '@shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dash board',
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'books' },
      {
        path: 'books',
        component: DashBoardBooksComponent,
        data: {
          breadcrumb: 'Books',
        },
      },
    ],
  },
]

@NgModule({
  declarations: [DashboardComponent, DashBoardBooksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzNotificationModule,
    NzBreadCrumbModule,
    NzMentionModule,
    NzEmptyModule,
  ],
})
export class DashboardModule {}
