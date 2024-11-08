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
