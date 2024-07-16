class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(
      `hello my name is ${this.name} and i am ${this.age} years old.`
    );
  }
}

var person1 = new Person("piragenth", 21);
var person2 = new Person("satkunananthan", 56);

person1.greeting();
person2.greeting();
