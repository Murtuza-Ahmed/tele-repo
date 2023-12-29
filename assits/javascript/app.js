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
// console.log(typeof(anotherName))
console.log(anotherName.fName);
