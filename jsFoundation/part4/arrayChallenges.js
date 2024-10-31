/* Shortcut for multiline comment:
                                   alt + shift + A */

/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];
// Another way of declaring an Array:
let teaFlav = new Array("green tea", "black tea", "oolong tea");
// console.log(teaFlavors);
// console.log(teaFlav);

const firstTea = teaFlavors[0];
// console.log(firstTea);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];

const favoriteCity = cities[2];
// console.log(favoriteCity);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];

// citiesVisited[2] = "Berlin"; // Using the indexes
// citiesVisited[5] = "Berlin"; // But it can get messy
// If we don't konow the size of array or we put up the wrong index

// console.log(citiesVisited.length);
// citiesVisited[citiesVisited.length] = "Berlin"; // Better Fancy way of doing it

citiesVisited.push("Berlin"); // Safer & Simpler way
// console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

// copying simple variables is like:
let var1 = 5;
let var2 = var1;
var1 = 9;
// console.log(var2);

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas);
// console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
 */
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);

