export type User = {
  name: string;
  email: string;
};

export type User2 = {
  name: string;
  email: string;
};

export interface IDoSomethings {
  fn1(): void;
  fn2(name: string): void;
}
