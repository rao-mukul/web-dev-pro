// JavaScript is Dynamically Typed Language
// There is no pre-defined type, it checks all these types dynamically on the go.

// -------Implicit Type Conversion by JS-------
// console.log(1 + "1");

let isValue = true;
// console.log(isValue + 1);
// console.log(isValue + '1');

// -------Explicit Type Conversion-------
let value = true;
// console.log(Number(value));

value = "2";
// console.log(Number(value));
// console.log(typeof Number(value));

value = "2abc";
// console.log(Number(value));
// -------NaN (Not-a-Number)-------
// is not a data type itself but rather a special value that belongs to the number type.
// console.log(typeof Number(value)); // Type of NaN is number
// So, NaN is a special "non-number" numeric value within the number type, signaling an invalid mathematical operation or result.

// console.log(NaN === NaN); // false
// NaN is the only value in JavaScript that is not equal to itself.
let NaNvalue = NaN;
// console.log(isNaN(NaNvalue)); //isNaN function to check if a value is NaN

// console.log(Number(null));
// console.log(Number(undefined));
