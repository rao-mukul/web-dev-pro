function stringToNumber(input) {
  let num = Number(input);
  if (input.trim() === "") {
    return `Not a number`;
  }
  if (isNaN(num)) {
    return `Not a number`;
  } else {
    return num;
  }
}

// console.log(stringToNumber(""));

function flipBoolean(input) {
  let bool = Boolean(input);
  let flippedBool = !bool;
  return flippedBool;
}

function whatAmI(input) {
  let inputType = typeof input;
  if (inputType === "object") {
    if (Array.isArray(inputType)) {
      inputType = "array";
    } else if (input === null) {
      inputType = "null";
    }
  }
  return `I'm a ${inputType}!`;
}

function isItTruthy(input) {
  //   if (Boolean(input) === true) {
  //     return `It's truthy!`;
  //   } else {
  //     return `It's falsey!`;
  //   }
  return input ? `It's truthy!` : `It's falsey!`;
}
