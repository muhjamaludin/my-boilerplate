# Typescript, Jest

## Add Package

```bash
# init repository
pnpm init
# add typescript
pnpm add -D typescript ts-node
# create tsconfig.json
npx tsc --init
# add jest testing framework
pnpm add -D jest ts-jest @types/jest
```

## Configure Jest Environtment

```json
// in package.json added
{
  // ...
  "scripts": {
    "test": "jest"
  },
  //   ...
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}
```

```json
// in tsconfig.json add include, exclude properties
{
  // ... "compilerOptions": {}
  "include": ["**/**.ts"],
  "exclude": ["node_modules"]
}
```

## Test

```bash
pnpm test
```

## Source recommendation

- [blog.amanpreet.dev](https://blog.amanpreet.dev/test-driven-development-with-typescript-for-beginners)
