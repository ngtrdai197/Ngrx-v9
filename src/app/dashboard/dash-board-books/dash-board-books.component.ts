import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dash-board-books',
  templateUrl: './dash-board-books.component.html',
  styleUrls: ['./dash-board-books.component.scss'],
})
export class DashBoardBooksComponent implements OnInit {
  inputValue: string
  mentionLoading = false
  webFrameworks = [
    { name: 'React', type: 'JavaScript' },
    { name: 'Angular', type: 'JavaScript' },
    { name: 'Laravel', type: 'PHP' },
    { name: 'Flask', type: 'Python' },
    { name: 'Django', type: 'Python' },
  ]

  constructor() {}

  ngOnInit(): void {}

  valueWith = (data: { name: string; type: string }) => data.name

  onSelect(value: object) {
    console.log(`value: `, value)
  }
}
