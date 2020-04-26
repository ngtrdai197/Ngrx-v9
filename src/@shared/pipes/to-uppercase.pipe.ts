import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'toUppercase',
})
export class ToUppercasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) return null
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
