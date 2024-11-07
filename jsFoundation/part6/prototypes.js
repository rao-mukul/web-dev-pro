let computer = { cpu: 8 };
let lenovo = {
  screen: `HD`,
  __proto__: computer,
};

let tomHardware = {};

// console.log(`lenovo`, lenovo.__proto__);

// Another better way of using Prototypes

let genericCar = { tyres: 4 };

let tesla = {
  driver: `AI`,
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla`,tesla.__proto__); // Previous Way
console.log(`tesla`, Object.getPrototypeOf(tesla)); // Better Way
