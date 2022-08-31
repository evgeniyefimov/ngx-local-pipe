# 2.0.2

- **feat** support Angular versions 12, 13, 14

# 2.0.0

- **feat** update Angular packages to version 13.0.0

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

- **chore** support angular 12

# 1.0.0

- Initial
