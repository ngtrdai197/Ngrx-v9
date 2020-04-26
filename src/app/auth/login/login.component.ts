import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'

import { ILogin } from '@/interfaces'
import * as authActions from '@core/store/auth/auth.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFrom: FormGroup

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.buildForm()
  }

  onLogin() {
    const login: ILogin = {
      username: this.loginFrom.get('username').value,
      password: this.loginFrom.get('password').value,
    }
    this.store.dispatch(authActions.onLogin({ login }))
  }

  private buildForm() {
    this.loginFrom = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}
