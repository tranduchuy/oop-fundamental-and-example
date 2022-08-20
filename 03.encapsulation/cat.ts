import { Animal } from "../01.abstraction/animal";

export class Cat extends Animal {
  say(): void {
    console.log("meow");
  }
}

const c = new Cat();
c.say();
// c.run();
