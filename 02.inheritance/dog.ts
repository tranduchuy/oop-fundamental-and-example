import { Animal } from "../01.abstraction/animal";

export class Dog extends Animal {
  constructor(name: string) {
    console.log("Init in dog class");
    super();
    this.name = name;
  }

  say(): void {
    console.log("go go");
  }
}

const husky = new Dog("lou");
console.log(husky);
// husky.say();
// console.log(husky.name);
// husky.run();
