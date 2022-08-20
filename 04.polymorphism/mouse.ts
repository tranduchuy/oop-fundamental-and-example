import { Animal } from "../01.abstraction/animal";

class Mouse extends Animal {
  say(): void {
    console.log("chit chit");
  }

  // override
  run(): void {
    console.log("Running with 2 feet");
  }
}

const m = new Mouse();
m.run();
