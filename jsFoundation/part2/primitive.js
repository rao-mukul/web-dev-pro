// Number : numbers < 2 ** 53
let balance = 101;
let balance2 = -27.5;
let anotherBalance = new Number(101); // Not Recommended

// console.log(balance);
// console.log(balance2);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof balance2);
// console.log(typeof anotherBalance);

// Boolean
let isActive = true;
let isReallyActive = new Boolean(false); // Not Recommended

// null and undefined
let firstName; // undefined --> the value is not defined yet
let fname = undefined;
let lastName = null; // null --> empty

// console.log(firstName);
// console.log(fname);
// console.log(lastName);
// console.log();

// console.log(typeof firstName);
// console.log(typeof fname);
// console.log(typeof lastName); // Historical Bug in JS, Returns type of null as object

// string
let myString = "Hello";
let userName = 'Mukul';
// console.log(typeof myString + typeof userName);

let oldGreet = myString + ' ' + 'Mukul';
// console.log(oldGreet);

let greetMessage = `Hello ${userName}!`; // string interpolation
let demoStr = `Value is ${2 * 2}`;
// console.log(greetMessage);
// console.log(demoStr);

// symbol --> The whole point of symbol is Generate a Unique Value
let sym1 = Symbol();
let sym2 = Symbol();
// console.log(typeof sym1);
console.log(sym1);
console.log(sym1 == sym2); 

let sym3 = Symbol("Mukul");
let sym4 = Symbol("Mukul"); // It creates a new Symbol every time
console.log(sym4);
console.log(sym3 === sym4); // symbol Guarantees the Uniqueness
// Symbol() constructor returns a Symbol that's Guaranteed to be unique