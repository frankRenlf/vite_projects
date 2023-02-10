export class Person<T> {
  name: string;
  age: number;

  des?:T;


  constructor(name: string, age: number, des: T) {
    this.name = name;
    this.age = age;
    this.des = des;
  }
}
