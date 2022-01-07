// interface IControlPanel {
//     // add some methods or something to distinguish from {}
//     doAThing(): void;
// }

// // add a registry of the type you expect
// namespace IControlPanel {
//     type Constructor<T> = {
//         new(...args: any[]): T;
//         readonly prototype: T;
//     }
//     const implementations: Constructor<IControlPanel>[] = [];
//     export function GetImplementations(): Constructor<IControlPanel>[] {
//         return implementations;
//     }
//     export function register<T extends Constructor<IControlPanel>>(ctor: T) {
//         implementations.push(ctor);
//         return ctor;
//     }
// }


// @IControlPanel.register
// class BasicControlPanel {
//     doAThing() { }
// }

// @IControlPanel.register
// class AdvancedControlPanel {
//     doAThing() { }
// }

// // // error, doAThing is missing from BadControlPanel
// // @IControlPanel.register
// // class BadControlPanel {
// //   doNothing() { }
// // }