function Animal() {}

Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return `Woof!`;
};

const dog = new Dog();
console.log(dog.bark());
console.log(dog.speak());
