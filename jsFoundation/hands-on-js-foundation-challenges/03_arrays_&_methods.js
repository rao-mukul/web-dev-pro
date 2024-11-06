function filterNumbers(arr) {
  const nums = arr.filter((element) => typeof element === "number");
  return nums;
}
// console.log(filterNumbers([1, "djkd", 3]));

function reverseArray(arr) {
  return arr.reverse();
}
// console.log(reverseArray([1,3,5]));

function findMax(arr) {
  return Math.max(...arr);
}
// console.log(findMax([12,34,3]));

function removeDuplicates(arr) {
  let uniqueArray = [];
  arr.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
}
// console.log(removeDuplicates([1,2,1,2,4,5,3,4]));

// Above Question using filter method
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter(
  (item, index) => array.indexOf(item) === index
);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Above Question using Set
function removeDuplicates2(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates2([1, 2, 1, 2, 4, 5, 3, 4]));

function flattenArray(arr) {
  return arr.flat(Infinity);
}
// console.log(flattenArray([1,2,[3,4,[45,5]],5,6]));
