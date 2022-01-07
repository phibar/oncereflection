// https://stackoverflow.com/questions/47082026/typescript-get-all-implementations-of-interface

import "reflect-metadata";

interface IControlPanel {
    // add some methods or something to distinguish from {}
    doAThing(): void;
}
interface IFoo {
    foo(): void
}
type Constructor<T> = {
    new(...args: any[]): T;
    readonly prototype: T;
}

class Namespace {
    static implementations: Constructor<any>[] = [];

    static register<T extends Constructor<I>, I>(ctor: T) {
        console.log("META", ctor.name, Reflect.getMetadataKeys(ctor))
        Namespace.implementations.push(ctor);
        return ctor
    }

    static logDesignParams(target: any, key: string) {
        var types = Reflect.getMetadata("design:paramtypes", target, key);
        console.log(`${key} param types: ${types}`);

        types = Reflect.getMetadata("design:returntype", target, key);
        console.log(`${key} returntype: ${types}`);
    }
}

@Namespace.register
@Reflect.metadata("implements", ["IControlPanel"])
export class BasicControlPanel2 implements IControlPanel, IFoo {
    foo() {
        throw new Error("Method not implemented.");
    }

    doAThing() { }
    //  implements(){
    //     return []
    // }
    @Namespace.logDesignParams
    test(foo: string):string {
        
return ""
    }
}

// @Namespace.register
// class AdvancedControlPanel2 implements IControlPanel{
//     doAThing() { }
//    static implements(){
//         return [""]
//     }
// }


@Namespace.register
class BadControlPanel implements IControlPanel {
    doNothing() { }
    doAThing() { }
    constructor(foo: string) {

    }
}

var foo = new BasicControlPanel2()
console.log("impl", Namespace.implementations)