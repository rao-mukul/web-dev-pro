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

// There's an Execution Context Associated with every Function

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
