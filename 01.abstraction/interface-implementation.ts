import { IDoSomethings } from "./do-somethings.interface";

class A implements IDoSomethings {
  prop1: string;

  fn1(): void {}

  fn2(name: string): void {}
}

class B implements IDoSomethings {
  prop2: string;

  fn1(): void {}

  fn2(name: string): void {}
}

const test = (x: IDoSomethings) => {
  ///
  x.fn1();
  x.fn2("abc");
};

test(new A());
test(new B());
