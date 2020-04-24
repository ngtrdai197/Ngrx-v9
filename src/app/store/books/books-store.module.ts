import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'

import * as booksReducer from './books.reducer'
import { EffectsModule } from '@ngrx/effects'
import { BookEffects } from './books.effect'

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(booksReducer.booksFeatureKey, booksReducer.reducer),
		EffectsModule.forFeature([BookEffects]),
	],
})
export class BooksFeatureStoreModule {}
