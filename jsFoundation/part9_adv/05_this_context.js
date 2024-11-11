const person = {
  name: "Mukul",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Hitesh" });
boundGreet();

// bind, call and apply
