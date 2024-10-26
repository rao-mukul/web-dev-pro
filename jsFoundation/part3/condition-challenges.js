//1. Checking if a number is greater than another number:

let num1 = 6;
let num2 = 9;

// console.log("Before If else");
if (num1 > num2) {
  //   console.log("Yep num1 is greater than num2");
} else {
  //   console.log("Nope num1 is  NOT greater than num2");
}
// console.log("After if else");

//2. Checking if a string is equal to another string:

let userName = "Mukul";
let anotherUserName = "Mukul";

if (userName == anotherUserName) {
  //   console.log("Pick another username");
} else {
  //   console.log("You can pick this username");
}

//3. Checking if a variable is a number or not:

let num = "11";
// console.log(typeof(typeof(num)));

if (typeof num === "number") {
  //   console.log("Yep, that's a number");
} else {
  //   console.log("Nope, that's not a number");
}

//4. Checking if a boolean value is true or false:

let isLoggedin = false;

if (isLoggedin) {
  //   console.log("User is logged in");
} else {
  //   console.log("User logged out ");
}

/*         == vs ===
== only checks for equality of value
=== checks for the equality of both value and data type  */

// Fun with == vs ===
// let isLoggedIn = 1;
// if (isLoggedIn === true) {
//   console.log("Checks for the data type as well");
// } else if (isLoggedIn == true) {
//   console.log("Just checks for the value");
// } else {
//   console.log("User logged out ");
// }

//5. Checking if an array is empty or not:

let items = [];

// console.log(items.length);

if (items.length === 0) {
  //   console.log("Array is empty");
} else {
  //   console.log("Array is NOT empty");
}

// -------Fun with Arrays-------
let arr = [];
// console.log(arr === []); // This condition will always return 'false'
// since JavaScript compares objects by reference, not value.
let arr1 = [];
// console.log(arr === arr1); // false
let arr2 = arr;
// console.log(arr2 === arr); // true because same reference
