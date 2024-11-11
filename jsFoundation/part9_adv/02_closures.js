// Closure are functions, they remember the environment in which they were created
// These functions can retain the vriables declared outside them

function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

// Closure: They are special type of functions in which if any function is created
// It actually retains the memory of the function
