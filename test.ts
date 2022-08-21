import { Animal } from "./01.abstraction/animal";
import { Dog } from "./02.inheritance/dog";
import { Cat } from "./03.encapsulation/cat";

const test = (x: Animal) => {};

test(new Dog("HÚKY"));
test(new Cat());
