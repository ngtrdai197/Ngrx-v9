import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IconsProviderModule } from '@/icons-provider.module'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'

import { DefaultLayoutComponent, HeaderComponent } from './components'

const components = [DefaultLayoutComponent, HeaderComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    DefaultLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDropDownModule,
  ],
})
export class SharedModule {}
