class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return `The vehicle is moving`;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `Engine started`;
  }
  move() {
    return `The car is driving`;
  }
}

const vh = new Vehicle("Kia", "Sonnet");
const car = new Car("Kia", "Carens");
console.log(Vehicle.isVehicle(car));
