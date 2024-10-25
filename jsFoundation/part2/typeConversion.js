// JavaScript is Dynamically Typed Language
// There is no pre-defined type, it checks all these types dynamically on the go.

// -------Implicit Type Conversion by JS-------
// console.log(1 + "1");
// console.log("1" + null);
// console.log("1" + undefined);
// console.log(typeof ("1" + { name: "Mukul" }));
// console.log("9"+[1,2]);
// console.log("2" + true);
// (String + Any Data Type): JS tries to convert the other data type to String and Add

// console.log("1" - 1);
// console.log("7" - "2");
// console.log("7" * "2");
// console.log("7" * 2);
// console.log("7" * null);
// console.log("7" * undefined);
// console.log("7" / null);
// console.log("7" / undefined);
// console.log("7" / "2");
// console.log("7" / 3);
// console.log("2" - [1]);
// console.log("2" - {"id":1});
// console.log("2" * [1]);
// console.log("2" * {"id":1});
// console.log("2" / [1,2]);
// console.log("2" / { id: 1 });
// console.log("9" % "2");
// console.log("9" % 2);
// console.log("9" % null);
// console.log("9" % undefined);
// console.log("9"%[2]);
// console.log("2" ** 3);
// console.log("2" ** "3");
// console.log("2" ** null);
// console.log("2" ** undefined);
// console.log("2" - true);
// console.log("2" - false);
// console.log("2" * true);
// console.log("2" / true);
// console.log("2" % true);
// (String -/*% ** Any Data Type): JS tries to convert both into Number and evaluate

// console.log(2 + undefined);
// console.log(2 + null);
// console.log(2 + true);
// console.log(2 * null);
// console.log(2 * true);
// console.log(2 ** true);
// console.log(2 ** [2]);
// Except (Number + String) : Convert to string and concatenate
// (Number +-*/% ** Any Data Type): Convert to number and evaluate

// console.log(null + null);
// console.log(null - null);
// console.log(null + undefined);
// console.log(null * undefined);
// console.log(undefined + undefined);
// console.log(null / null);
// console.log(10 / null);

// console.log(null + [1, 2]);
// console.log(undefined + [1, 2]);
// console.log(true + [1]);
// console.log(true + { 1: 2, username: "Mukul" });

// console.log(true * [1]);
// console.log(true / [1]);
// console.log(true / {1:2});
// console.log(false * [1]);
// console.log(false * { id: 1 });

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
// So, NaN is a special "non-number" numeric value within the number type, signaling an invalid mathematical operation or result.Like:
// console.log(0/0); //NaN

// console.log(NaN === NaN); // false
// NaN is the only value in JavaScript that is not equal to itself.
let NaNvalue = NaN;
// console.log(isNaN(NaNvalue)); //isNaN function to check if a value is NaN

// console.log(5 / 0);
//Dividing by 0 gives Infinity in JS
let infi = Infinity;
// console.log(infi);
// console.log(Infinity + Infinity);
// console.log(Infinity * Infinity);
// console.log(Infinity ** Infinity);

// console.log(Infinity - Infinity);
// console.log(Infinity / Infinity);
// console.log(Infinity % Infinity);

// console.log(Number(null));
// console.log(Number(undefined));

// console.log(Number("6"));
// console.log(Number("Mukul"));

// console.log(Number([1]));
// console.log(Number([1,2]));

// console.log(Number({ id: 1 }));

// console.log(String(2));
// console.log(String(null));
// console.log(String(undefined));
// console.log(String(true));
// console.log(String([1,2,3]));
// console.log(String({id: 1}));
// console.log(typeof String({id: 1}));

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(99));
// console.log(Boolean(-9.9));
// console.log(Boolean(0.0001));
// 0: false , Non-Zero: true

// console.log(Boolean("Mukul"));
// console.log(Boolean(" "));
// console.log(Boolean("")); //false
// Empty String : false

// console.log(Boolean([])); //true
// console.log(Boolean([1, 2, 3])); //true
// An Array converted to Boolean is always true

// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// Possible false Vales:
// console.log(`Possible false vales in JS are:
// -> false      ${false}
// -> 0          ${Boolean(0)}
// -> ""         ${Boolean("")}
// -> NaN        ${Boolean(NaN)}
// -> undefined  ${Boolean(undefined)}
// -> null       ${Boolean(null)}
// `);

// console.log(BigInt(true));
// console.log(BigInt("16"));
// console.log(BigInt(19));
// console.log(BigInt("Mukul")); //Error
// console.log(BigInt(NaN)); //Error
// console.log(BigInt(Infinity)); //Error
// console.log(BigInt(undefined)); // Error
// console.log(BigInt(null)); // Error
// console.log(BigInt([1])); // ✅
// console.log(BigInt([1,2])); // Error

// console.log(undefined(1)); // TypeError: undefined is not a function
// console.log(null(1)); //TypeError: null is not a function

// console.log(Object(1));
// console.log(Object(10n));
// console.log(Object("Mukul"));
// console.log(Object(true));

// console.log(Object(null)); // returns: {}
// console.log(Object(undefined)); // returns: {}
// console.log(Object(Symbol("Mukul")));
// console.log(Object(Symbol));
// console.log(Object([1,"Mukul",3]));

// console.log(Object(NaN));
// console.log(Object(Infinity));

// Therefore, It is Said that everything in JS is an Object
