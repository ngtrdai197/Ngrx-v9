import { OnInit, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'

export abstract class BaseComponent implements OnInit, OnDestroy {
  protected ngDestroyed$ = new Subject()
  public loading: {
    [key: string]: boolean
  } = {}
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.ngDestroyed$.next()
    this.ngDestroyed$.complete()
  }

  public trackByIndex(index, item) {
    return index
  }
}
