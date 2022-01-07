import "reflect-metadata";

interface Type<T> {
  new (...args: any[]): T;
}

function Injectable() {
  return function <T>(target: Type<T>) {
    console.log(Reflect.getMetadata("design:paramtypes", target));
  };
}

@Injectable()
class Service1 {
  doService1Staff() {
    console.log("Service1");
  }
}

@Injectable()
class Service2 {
  doService2Staff() {
    console.log("Service2");
  }
  constructor(public service1: Service1) {}
}

@Injectable()
class Example {
  constructor(public service1: Service1, public service2: Service2) {}
}

class Injector {
  private static container = new Map<string, any>();

  static resolve<T>(target: Type<T>): T {
    if (Injector.container.has(target.name)) {
      return Injector.container.get(target.name);
    }
    const tokens = Reflect.getMetadata("design:paramtypes", target) || [];
    const injections = tokens.map((token: Type<any>): any =>
      Injector.resolve(token)
    );
    const instance = new target(...injections);
    Injector.container.set(target.name, instance);
    return instance;
  }
}

const example = Injector.resolve(Example);
example.service1.doService1Staff();
example.service2.doService2Staff();