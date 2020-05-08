import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, catchError, exhaustMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router'

import * as authActions from './auth.action'
import { AuthService } from '@core/services/auth.service'

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.onLogin),
      exhaustMap((action) => {
        return this.authService.onLogin(action.login).pipe(
          map((login) => {
            this.router.navigate([''])
            return authActions.onLoginsSuccess({
              authState: {
                token: login.accessToken,
                error: null,
                user: login.user,
                loading: false,
              },
            })
          }),
          catchError((err) =>
            of(
              authActions.onLoginsFailed({
                authState: {
                  user: null,
                  token: null,
                  loading: false,
                  error: err.error ?? {
                    statusCode: err.status,
                    message: err.statusText,
                  },
                },
              })
            )
          )
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
