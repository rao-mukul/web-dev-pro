const userName = {
  firstname: "Hitesh", // these values are primitive type
  isLoggedin: true,
  "spaced key": 99,
};
// console.log(typeof userName);

// userName = {}; // TypeError: Assignment to constant variable
// But we can change the values inside a const object

// console.log(userName.firstname); // Accessing a Property
// console.log(userName["spaced key"]); // Another way to access

userName.firstname = "Mukul"; // Updating a Property : Mutablility

userName.lastname = "Yadav"; // Adding a Property
// console.log(userName);

// Inbuilt Objects
let today = new Date();
// console.log(today);
// console.log(today.getDate());

// Array
let anotherUser = ["Mukul", true];

// console.log(anotherUser[0]);

