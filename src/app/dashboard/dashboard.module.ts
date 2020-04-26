import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './dashboard/dashboard.component'
import { DashBoardBooksComponent } from './dash-board-books/dash-board-books.component'
import { RouterModule, Routes } from '@angular/router'
import { IconsProviderModule } from '@/icons-provider.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { SharedModule } from '@shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'books',
        component: DashBoardBooksComponent,
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
  ],
})
export class DashboardModule {}
