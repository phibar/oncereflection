import * as ts from 'typescript';


export interface MyPluginOptions {
    some?: string
}

export default function myTransformerPlugin(program: ts.Program, opts: MyPluginOptions) {
    return {
        before(ctx: ts.TransformationContext) {
            console.log("bar")
            //throw "foo"
            return (sourceFile: ts.SourceFile) => {
                console.log("myTransformer", sourceFile.fileName)
                function visitor(node: ts.Node): ts.Node {

                    console.log("  Node", ts.SyntaxKind[node.kind], sourceFile.text.substring(node.pos,node.end).replace('\n',''))
                    if (ts.isCallExpression(node) && node.expression.getText() === 'safely') {
                        const target = node.arguments[0]
                        if (ts.isPropertyAccessExpression(target)) {
                            return ts.createBinary(
                                target.expression,
                                ts.SyntaxKind.AmpersandAmpersandToken,
                                target
                            )
                        }
                    }
                    return ts.visitEachChild(node, visitor, ctx)
                }
                return ts.visitEachChild(sourceFile, visitor, ctx)
            }
        }
    }
}



// function getKindNamesForApi() {
//     // some SyntaxKinds are repeated, so only use the first one
//     const kindNames: { [kind: number]: string } = {};
//     for (const name of Object.keys(ts.SyntaxKind).filter(k => isNaN(parseInt(k, 10)))) {
//       const value = (ts.SyntaxKind as any)[name] as number;
//       if (kindNames[value] == null) {
//         kindNames[value] = name;
//       }
//     }
//     return kindNames;
//   }