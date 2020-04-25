import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DefaultLayoutComponent, HeaderComponent } from './components'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const components = [DefaultLayoutComponent, HeaderComponent]

@NgModule({
	declarations: [...components],
	imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
	exports: [DefaultLayoutComponent, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
