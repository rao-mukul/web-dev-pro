// Task 1
const person = {
  name: "Alice",
  introduce() {
    return `Hi, my name is ${this.name}`;
  },
};

const boundIntroduce = person.introduce.bind(person);

// Task 2
function introduce() {
  return `Introducing ${this.name}`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

introduce.call(person1);
introduce.call(person2);

// Task 3
function sum(a, b) {
  return (a + b) * this.multiplier;
}
const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };

sum.apply(context1, [5, 10]);
sum.apply(context2, [5, 10]);
