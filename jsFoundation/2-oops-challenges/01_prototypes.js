function Animal() {
  this.speak = function () {
    return `Animal speaking`;
  };
}

function Dog() {
  Animal.call(this);
  this.bark = function () {
    return `Woof!`;
  };
}

const dog = new Dog();
console.log(dog.bark());
console.log(dog.speak());
