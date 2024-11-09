// Task 1: Encapsulation Using Getters and Setters
class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }
}

// const acc = new BankAccount();
// acc.balance = 100;
// console.log(acc.balance);
// acc.deposit(600);
// console.log(acc.balance);
// acc.withdraw(700);
// console.log(acc.balance);

// Task 2: Polymorphism with Method Overriding
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area(r) {
    return 3.14 * this.r ** 2;
  }
}
class Rectangle extends Shape {
  constructor(l, b) {
    super();
    this.l = l;
    this.b = b;
  }
  area(l, b) {
    return this.l * this.b;
  }
}
