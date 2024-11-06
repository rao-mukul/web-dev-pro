/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

const teaOrder = makeTea("Ice Tea");
// console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder(tea) {
    return `Order confirmed for ${tea}`;
  }
  return confirmOrder(teaType);
}

const orderConfirmation = orderTea("Chai");
// console.log(orderConfirmation);

// There's an ---Execution Context--- Associated with every Function

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

// Another Shortcut way when we have only one statement in the function
const calculateTotal2 = (price, quantity) => price * quantity;
// Here no {} and return statement is required but the code must be in single line
const totalCost = calculateTotal2(399, 1000);
// console.log(totalCost);

// -----------------------------------------------------------------
// This and Context in JS : Run the Following code in Bowser Console
function testOne() {
  console.log(this);
}
// testOne(); // prints the Window Object in Browser
// In the Bowser this is the Context because we are in the Window of Browser
// It doesn't print Window here in Node.js as there's no browser here

const testTwo = () => {
  console.log(this);
};
// testTwo(); // Arrow Function still prints the Window Object in Browser
// Therefore, Arrow Function do have the this context ✅
// So, the whole theory that Arrow functions don't have the this context is not true actually

// Arrow Function do have the Ability to reach out the this context
// But It doesn't have the ability to Pass on this context anywhere

// Eg: When we go into the DOM (Document Object Model):
// We can not use Arrow Functions when we try to access any Element on the Web
// We have to use the Classic Functions

// The Whole Reason Behind them is :
// That there is not enough ability in this in the Arrow Function
// It is there but the ability to just pass it on this is not there

// -----------------------------------------------------------------

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

function makeTea(teaType) {
  return `makeTea: ${teaType}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

const order = processTeaOrder(makeTea);
// console.log(order);

// These are Higher Order Functions
// Also reffered as First-class Function in MDN docs
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// forEach loop is also an example of Higher Order Function:
// As it is a method which accepts further a function as it's parameter

// 👉 Anything that takes function as a parameter or returns a function back
// is an example of Higher order function
