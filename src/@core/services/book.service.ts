import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class BookService {
  private endPoint = `https://www.googleapis.com/books/v1/volumes?q=quilting`
  constructor(private http: HttpClient) {}

  public loadBooks(): Observable<any> {
    return this.http.get<any>(this.endPoint).pipe(
      map((response) =>
        response.items.map((book: any) => {
          const {
            volumeInfo: { title, authors, description },
          } = book
          return {
            title,
            authors,
            description,
          }
        })
      )
    )
  }
}
