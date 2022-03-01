import * as ts from 'typescript';

let source = `
@foo
class MyClass {
  @bar
  public a: number;

  @baz
  public b: number;
}
`;


let result = ts.transpileModule(source, {
  compilerOptions: {module: ts.ModuleKind.CommonJS},
  transformers: {before: [simpleTransformer()]}
});

function simpleTransformer() {
    console.log("Hello world");
}