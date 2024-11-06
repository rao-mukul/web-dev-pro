// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
  return a + b;
}

// Subtract small value from larger one
function subtract() {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

function multiply() {
  return a * b;
}

// Divide larger value by small
function divide() {
  if (a > b) {
    return a / b;
  } else {
    return b / a;
  }
}

// Increase value of a by 1
function increment() {
  return a + 1;
}

// Decrease value of b by 1
function decrement() {
  return b - 1;
}

// Divide larger value by small to find the reminder
function reminder() {
  if (a > b) {
    return a % b;
  } else {
    return b % a;
  }
}
