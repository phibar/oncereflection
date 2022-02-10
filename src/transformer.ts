import * as ts from 'typescript';
import * as TSTypes from 'typescript';


export interface MyPluginOptions {
    some?: string
}

function checkClassDeclaration(tsClass: TSTypes.ClassDeclaration) {
    console.log("tsClass.heritageClauses")
    tsClass.heritageClauses && checkHeritageClause(tsClass.heritageClauses);
    // tsClass.decorators = []
}

function checkHeritageClause(tsHeritage: TSTypes.NodeArray<TSTypes.HeritageClause>) {
    tsHeritage.forEach(element => {
        console.log(element.getText())
        element.types.forEach( (type: TSTypes.ExpressionWithTypeArguments)  => 
            console.log("Interface:",(type.expression as TSTypes.Identifier).text)
        )
    });

    // tsClass.decorators = []
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
                    if (ts.isClassDeclaration(node)) {
                        checkClassDeclaration(node);

                    }


                    return ts.visitEachChild(node, visitor, ctx)
                }
                return ts.visitEachChild(sourceFile, visitor, ctx)
            }
        }
    }
}



// ts.js 1304 write Reflect metaData __decorators
// ts.js 4

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