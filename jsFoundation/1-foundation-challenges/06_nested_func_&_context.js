function outer() {
  function inner() {
    return `Inner function called`;
  }
  return inner();
}

// console.log(outer());

// The below code shows the limited access of arrow function to this context
// const person = {
//   nm: "Hitesh",
//   age: 19.5,
//   introduce: () => {
//     console.log(`Hi, my name is ${this.nm} and I am ${this.age} years old`);
//   },
// };
// person.introduce();

const person = {
  name: "Hitesh",
  age: 19.5,
  introduce: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    // If we don't use this here it will give an Error and will not recognise name and age
  },
};
person.introduce();

// Using an ES6 Method Shorthand
const me = {
  name: "Mukul",
  greet() { // Method shorthand
    console.log(`Hello, my name is ${this.name}!`);
  }
};

// Using the method
// me.greet(); // Output: Hello, my name is Mukul!
