/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris" || cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
smallNumbers = [];

for (const number of numbers) {
  if (number === 4) {
    break;
  }
  smallNumbers.push(number);
}
// console.log(smallNumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let myTeas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of myTeas) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulations = {};

// Getting the keys and Values of an Object as an array
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  // console.log(citiesPopulation.city); // Not gonna work here

  cityNewPopulations[city] = citiesPopulation[city];
}
// console.log(cityNewPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

   */

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Paris: 2200000,
  Berlin: 3500000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

// console.log(availableTeas);
// to stop the loop completely when "chai" is found, you can use a regular for loop instead of forEach, we can also use the some() method

// Since forEach does not support breaking out of the loop.

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myWorldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let myNumbers = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] === 7) {
    continue;
  }
  doubledNumbers.push(myNumbers[i] * 2);
}
// console.log(doubledNumbers);

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let myTeasCollection = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];

let shortTeas = [];

for (const tea of myTeasCollection) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}

// console.log(shortTeas);
