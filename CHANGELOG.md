# 2.2.0

- **feat** support Angular 17.0.0

# 2.1.0

- **feat** support Angular 16.0.0

# 2.0.3

- **feat** support Angular versions 12.2.0, 13.0.0, 14.0.0, 15.0.0

# 2.0.2

- **feat** support Angular versions 12.2.0, 13.0.0, 14.0.0

# 2.0.0

- **feat** support Angular 13.0.0

### BREAKING CHANGES

- **chore** changed an order of arguments

BEFORE:

```
firstArgument | ngxLocalPipe : componentMethod : secondArgument : thirdArgument ...etc
```

AFTER:

```ts
componentMethod | ngxLocalPipe : firstArgument : secondArgument : thirdArgument ...etc
```

# 1.0.1

- **chore** support Angular 12.0.0

# 1.0.0

- Initial
