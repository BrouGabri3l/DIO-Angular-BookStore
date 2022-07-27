import { Pipe, PipeTransform } from '@angular/core';
import { BookCategory } from '../enums/book-category';

@Pipe({
  name: 'getEnumValue'
})
export class GetEnumValuePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return Object.values(BookCategory)[value];
  }

}
