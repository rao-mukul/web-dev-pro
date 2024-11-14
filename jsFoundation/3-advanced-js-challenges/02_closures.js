function createCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return `Rate limit exceeded`;
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}
