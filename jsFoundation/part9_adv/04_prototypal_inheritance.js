function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

let mukul = new Person("Mukul");
console.log(mukul.greet());

