export abstract class Animal {
  name: string;

  constructor() {
    console.log("init in animal class");
  }

  abstract say(): void;

  protected run(): void {
    console.log("Running");
  }
}

// const animal = new Animal();
// animal.say();
