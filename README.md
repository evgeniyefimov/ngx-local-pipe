# Simple local pipe, fully typed, see: https://github.com/angular/angular/issues/25976

## How to use

1. install by running `npm i ngx-local-pipe`
2. add `NgxLocalPipeModule` to your module imports

## Example

component template

```
componentMethod | ngxLocalPipe : firstArgument : secondArgument : thirdArgument ...etc
```

component class

```
public componentMethod(firstArgument, secondArgument, thirdArgument, ...) {
  ...
}
```

componentMethod should be a pure function, do not use `this` inside
