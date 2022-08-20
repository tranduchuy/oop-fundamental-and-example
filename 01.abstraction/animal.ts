export abstract class Animal {
  name: string;

  abstract say(): void;

  run(): void {
    console.log("Running");
  }
}

// const animal = new Animal();
// animal.say();
