import { Pipe, PipeTransform } from '@angular/core';

/**
 * Just an example of how typing shows up in the template when hovering over the pipe.
 */
@Pipe({
  name: 'randomizeLetters',
})
export class RandomizeLettersPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');
  }
}
