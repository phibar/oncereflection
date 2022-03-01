// https://stackoverflow.com/questions/47082026/typescript-get-all-implementations-of-interface

// type EmptyConstructorType<T extends abstract new () => any> = T extends abstract new () => infer R ? R : any;

// class Thing {
//     static getInstance<D extends EmptyConstructorType<Thing>> (some: { new (): Thing}) {
//         return new some()
//     }

// }

// class SomeThing extends Thing {

//     static myname:string="gh"

//     constructor(a:String){
//         super()
//     }


//  private foo:string=""
//  #privateName:string="private"
//  name: string=""
//  age:number=0

//  get privateName(){
//      return this.#privateName
//  }
// }




// const foo= SomeThing.getInstance
// foo.name = "my name"
// foo.age = 45678

// console.log(foo)

interface IControlPanel {
    // add some methods or something to distinguish from {}
    doAThing(): void;
    //constructor():ThisType<IControlPanel>
    // construct: EmptyConstructorType<typeof IControlPanel> = new IControlPanel;
}
interface IFoo {
    foo(): void
}
export class BasicControlPanel2 implements IControlPanel, IFoo {

    // private dd:String
    
    // constructor(dd:String) {
    //     this.dd=dd
    // }

    foo() {
        throw new Error("Method not implemented.");
    }

    doAThing() { }
    //  implements(){
    //     return []
    // }
    //@Namespace.logDesignParams
    test(foo: string):string {
        
return ""
    }
}

class AdvancedControlPanel2 implements IControlPanel{
    doAThing() { }
   static implements(){
        return [""]
    }
}


class BadControlPanel implements IControlPanel {
    doNothing() { }
    doAThing() { }
    constructor(foo: string) {

    }
}

var bcp2 = new BasicControlPanel2()
//console.log("impl", Namespace.implementations)