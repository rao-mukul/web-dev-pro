function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

function rangeIterator(start, end) {
  let current = start;
  return {
    next: function () {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

function* fibonacciGenerator() {
  let a = 1,
    b = 1;
  yield a;
  yield b;
  while (true) {
    let next = a + b;
    yield next;
    a = b;
    b = next;
  }
}
