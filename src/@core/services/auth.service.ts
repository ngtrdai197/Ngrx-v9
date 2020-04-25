import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ILogin, IAuthPayload } from '@/interfaces'
import { environment as env } from '@env/environment'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private endPoint = `${env.baseUrl}/auth/login`
  constructor(private http: HttpClient) {}

  public onLogin(login: ILogin): Observable<IAuthPayload> {
    return this.http.post<IAuthPayload>(this.endPoint, login)
  }
}
