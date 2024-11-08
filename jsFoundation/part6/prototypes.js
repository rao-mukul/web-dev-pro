let computer = { cpu: 8 };
let lenovo = {
  screen: `HD`,
  __proto__: computer,
};

let tomHardware = {};

// console.log(`lenovo`, lenovo.__proto__);
// console.log(lenovo.cpu);

// Another better way of using Prototypes

let genericCar = { tyres: 4 };

let tesla = {
  driver: `AI`,
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(tesla.tyres);
// console.log(`tesla`,tesla.__proto__); // Previous Way
// console.log(`tesla`, Object.getPrototypeOf(tesla)); // Better Way

// -----inject property devLength in Array which gives the length counting from 0-----
Object.defineProperty(Array.prototype, "devLength", {
  get: function () {
    return this.length - 1;
  },
});

let arr = [1, 2, 3, 4];
console.log(`Normal length: ${arr.length}`); // Output will be 4
console.log(`devLength: ${arr.devLength}`); // Output will be 3
