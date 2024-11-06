function stringToNumber(input) {
  let num = Number(input);
  if (isNaN(num)) {
    return `Not a number`;
  } else {
    return num;
  }
}

console.log(stringToNumber("    "));



function flipBoolean(input) {
  let bool = Boolean(input);
  let flippedBool = !bool;
  return flippedBool;
}

function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number!";
  }
  if (typeof input === "string") {
    return "I'm a string!";
  }
}

function isItTruthy(input) {
  if (Boolean(input) === true) {
    return `It's truthy!`;
  } else {
    return `It's falsey!`;
  }
}
