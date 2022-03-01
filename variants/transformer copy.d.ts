import * as ts from 'typescript';
export interface MyPluginOptions {
    some?: string;
}
export default function myTransformerPlugin(program: ts.Program, opts: MyPluginOptions): {
    before(ctx: ts.TransformationContext): (sourceFile: ts.SourceFile) => ts.SourceFile;
};
//# sourceMappingURL=transformer%20copy.d.ts.map