import { Component, OnInit } from '@angular/core'
import { NzNotificationService } from 'ng-zorro-antd/notification'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = false
  breadCrumds: string[] = []
  constructor(private notification: NzNotificationService) {}

  ngOnInit() {
    this.initNotification()
    const patch = location.pathname.slice(0)
    this.breadCrumds = patch.split('/').filter(Boolean)
  }

  private initNotification() {
    this.notification.create(
      'success',
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      {
        nzAnimate: true,
        nzDuration: 3000,
      }
    )
  }
}
