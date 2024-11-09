function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }

  this.name = name;
  this.age = age;

  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

const person = new Person("Alice", 30);
console.log(person.greet());
