function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfN(5));

function printMultiplicationTable(n) {
  let tableArray = [];
  for (let i = 1; i <= 10; i++) {
    tableArray.push(`${n} * ${i} = ${n * i}`);
  }
  return tableArray;
}
// console.log(printMultiplicationTable(5));

function countVowels(str) {
  str = str.toLowerCase();
  let counter = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (const letter of str) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}
// console.log(countVowels("MukUl"));

// Another Approach
function countVowels2(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
