import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { takeUntil } from 'rxjs/operators'

import * as authSelectors from '@core/store/auth/auth.selector'
import { IUser } from '@/interfaces/user.interface'
import { BaseComponent } from '@shared/components/base/base.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends BaseComponent implements OnInit {
  currentUser: IUser
  constructor(private store: Store) {
    super()
  }

  ngOnInit() {
    this.store
      .pipe(select(authSelectors.selectUser), takeUntil(this.ngDestroyed$))
      .subscribe((currentUser) => {
        this.currentUser = currentUser
        console.log('this.currentUser', this.currentUser)
      })
  }
}
