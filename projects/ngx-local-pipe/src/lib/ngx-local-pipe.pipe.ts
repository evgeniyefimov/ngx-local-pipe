import { Pipe, PipeTransform } from '@angular/core';

// use only with pure functions!
// https://github.com/angular/angular/issues/25976#issuecomment-520229969
@Pipe({ name: 'ngxLocalPipe' })
export class NgxLocalPipe implements PipeTransform {
  // Utilized variadic tuple types for types
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
  public transform<Value, Args extends unknown[], Result>(
    value: Value,
    func: (value: Value, ...args: Args) => Result,
    ...args: Args
  ): Result {
    return func(value, ...(args || []));
  }
}
