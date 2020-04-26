import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { BooksFeatureStoreModule } from './store/books/books-store.module'
import { AuthFeatureStoreModule } from './store/auth/auth-store.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule, BooksFeatureStoreModule, AuthFeatureStoreModule],
})
export class CoreModule {}
