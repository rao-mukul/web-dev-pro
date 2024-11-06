const squareNumbers = (arr) => arr.map((i) => i ** 2);
// console.log(squareNumbers([1,2,3,4,5]));

const filterEvenNumbers = (arr) => arr.filter((i) => i % 2 === 0);
// console.log(filterEvenNumbers([1,2,3,4,5]));

// Basic Method:
const sumPositiveNumbers2 = (arr) => {
  let sum = 0;
  arr.filter((i) => {
    if (i > 0) {
      sum += i;
    }
  });
  return sum;
};
// console.log(sumPositiveNumbers2([1, -1, 2, -2]));

// Using reduce():
const sumPositiveNumbers = (arr) => {
  // Filter to get only positive numbers
  const positiveNumbers = arr.filter((i) => i > 0);

  // Use reduce to sum the positive numbers
  const sum = positiveNumbers.reduce((acc, num) => acc + num, 0);
  return sum;
};
// const sum = console.log(sumPositiveNumbers([1, -1, 2, -2]));

const getNames = (arr) => arr.map((element) => element.name);

arr = [
  { name: "Mukul", surname: "Yadav" },
  { name: "Ram", surname: "Yadav" },
];
// console.log(getNames(arr));

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, currentWord) =>
      currentWord.length > longest.length ? currentWord : longest,
    ""
  );

const words = ["apple", "banana", "grapefruit", "kiwi"];
// console.log(findLongestWord(words));
