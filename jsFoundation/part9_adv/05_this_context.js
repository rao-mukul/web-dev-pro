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

// bind, call and apply are used to bind or add context

/* 
call: Invokes the function immediately with specified this and arguments (individually).
apply: Invokes the function immediately with specified this and arguments (as an array).
bind: Returns a new function with specified this and optional pre-set arguments, without invoking it immediately.
*/
