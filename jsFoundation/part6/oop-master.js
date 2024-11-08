let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}

// ------Prototype Chain------
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
// Animal.prototype.speak = () => `${this.type} makes a sound`;
// Using Arrow Function doesn't work here due to limited access of 'this' in arrow function

Array.prototype.mukul = function () {
  return `Custom method called by: ${this}`;
};

let myArray = [1, 2, 3, 4];
// console.log(myArray.mukul());
let myNewArray = [5, 6, 7, 8];
// console.log(myNewArray.mukul());

// Class in JS
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Kia", "Sonnet");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Kia", "Carens");
// console.log(vehOne.make);

// Encapsulation : to restrict the direct access to object data
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());
account.deposit(100);
// console.log(account.getBalance());

// Abstraction : hides the complex implementation details
class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne}\n${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism : poly:many + morphism: structure or form
// The word polymorphism means having many forms

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());
// Here the Method name is Exactly same but their Behaviour is different

// ------static method-------
class Calculator {
  // static methods are special methods which can only be called by the class itself
  // nobody else can call it
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

console.log(Calculator.add(2, 3));
