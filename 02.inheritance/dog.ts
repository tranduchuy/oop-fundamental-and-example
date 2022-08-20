import { Animal } from "../01.abstraction/animal";

class Dog extends Animal {
  say(): void {
    console.log("go go");
  }
}

const husky = new Dog();
husky.say();
