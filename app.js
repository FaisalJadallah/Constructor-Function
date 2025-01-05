//Q1
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
}
const car1 = new Car("BMW", "M3", 2009);
const car2 = new Car("toyota", "camry", 2013);
const car3 = new Car("mercedes", "e63s", 2018);
const cars = [car1, car2, car3];

for (const car of cars) {
    console.log(car.getDetails());
}

//Q2
const persons = {
    person1: { firstName: "Faisal", lastName: "Jadallah" },
    person2: { firstName: "Saeed", lastName: "Fwaz" },
    person3: { firstName: "Zaid", lastName: "Farouq" }
  };
  
  function firstName(personsObj) {
    const arr = [];
    let index = 0;
    for (const key in personsObj) {
      arr[index] = personsObj[key].firstName;
      index++;
    }
    return arr;
  }
console.log(firstName(persons));


//Q3
function objectToArray(obj) {
    const result = [];
    for (const key in obj) {
        result.push(key, obj[key]);
    }
    return result;
}

const input = { firstName: "Faisal", age: 24 };
console.log(objectToArray(input));