import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsProviderModule } from '@/icons-provider.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'

import { DefaultLayoutComponent, HeaderComponent } from './components'
import { ToUppercasePipe } from './pipes/to-uppercase.pipe'

const components = [DefaultLayoutComponent, HeaderComponent]

@NgModule({
  declarations: [...components, ToUppercasePipe],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    DefaultLayoutComponent,
    ToUppercasePipe,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
})
export class SharedModule {}
