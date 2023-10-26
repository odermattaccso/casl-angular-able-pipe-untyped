import { Pipe, PipeTransform } from '@angular/core';

type OrderBy = 'asc' | 'desc';

@Pipe({
  name: 'order',
})
// putting types as class generic doesn't seem to work for type inference in the template
export class OrderPipe<T, U extends OrderBy> implements PipeTransform {
  transform(value: T[], key: keyof T, order: U): T[] {

// moving the generic to the method signature works for type inference in the template
// export class OrderPipe implements PipeTransform {
//   transform<T, U extends OrderBy>(value: T[], key: keyof T, order: U): T[] {
    if (!Array.isArray(value) || value.length <= 0) {
      return [];
    }

    return value.sort((a: T, b: T) => {
      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
