import { Animal } from "../01.abstraction/animal";

class Mouse extends Animal {
  custom() {}

  say(): void {
    console.log("chit chit");
  }

  // override
  run(): void {
    super.run();
    this.say();
    console.log("Running with 2 feet");
  }
}

const m = new Mouse();
m.run();
