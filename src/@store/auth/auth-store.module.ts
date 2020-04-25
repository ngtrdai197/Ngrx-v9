import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import * as authReducer from './auth.reducer'
import { AuthEffects } from './auth.effect'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authReducer.authFeatureKey, authReducer.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthFeatureStoreModule {}
