let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
bark();

let a = 4;
{
  let b = 2;
}
a += 1;
console.log(a);

class vehicle {
  wheels;
  static count = 0;
  constructor(wheels) {
    this.wheels = wheels;
    this.increaseCount();
  }
  increaseCount() {
    vehicle.count = vehicle.count + 1;
  }
}
let bmw = new vehicle(4);
let bissan = new vehicle(4);
let bike = new vehicle(2);
let scooter = new vehicle(2);
console.log(vehicle.count);

function getAge(...args) {
  console.log(typeof args);
}
getAge(21);

let fName = "Amir";
let anotherName = { fName };
console.log(anotherName);
console.log(anotherName.fName);

const fruits = ["apple", "banana", "orange", "banana"];
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("kiwi")); // Output: -1
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const index = persons.findIndex((person) => person.age === 30);
console.log(index); // Output: 1
console.log("1" === true);
console.log("2" === true);

function multiply(a, b) {
  if (b === 0) {
    return 0;
  } else if (b > 0) {
    return a + multiply(a, b - 1);
  } else {
    return -multiply(a, -b);
  }
}
console.log(multiply(7, 5));

function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

const asyncFunction = async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const result = await Promise.race([delay(100), delay(500)]);
  return result;
};
asyncFunction().then((value) => console.log(value));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let columnSums = [];
for (let i = 0; i < matrix[0].length; i++) {
  let sum = 0;
  for (let j = 0; j < matrix.length; j++) {
    sum += matrix[j][i];
  }
  columnSums.push(sum);
}
console.log(columnSums);
