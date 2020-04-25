import { NgModule } from '@angular/core'
import { BooksFeatureStoreModule } from './books/books-store.module'
import { AuthFeatureStoreModule } from './auth/auth-store.module'

const storeModules = [BooksFeatureStoreModule, AuthFeatureStoreModule]

@NgModule({
  imports: storeModules,
  exports: storeModules,
})
export class RootStoreModule {}
