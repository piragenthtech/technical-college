class Person {
  constructor(name) {
    this.name = name;
    console.log(`Hello ${this.name}`);
}
//   greet() {
    // console.log(`Hello ${this.name}`);
//   }
}

class Student extends Person {
  constructor(name) {
    console.log("Creating student Class");

    super(name);
  }
}

let student1 = new Student("piragenth");

// student1.greet();
