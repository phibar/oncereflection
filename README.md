# oncereflection

## full install and rebuild

```
npm i
npm run tsc
```

## rebuild the transformer **only**

```
npm run tsc:transformer
```

## recompile the tests with the transformer output

```
npx tsc
```

## debug

- Set the breakpoints in ```./dist/transformer.cjs```
- start debug terminal by pressing on the "Debug" button in the package.json above the ```scripts``` section
- choose ```npm tsc:esm```

### misc
```
ttsc with ttransformer....not needed anymore with ts-patch

tsc --build ---verbose
npx tsc -p tsconfig.transformer.json 
```