const object = [
  { title: "A jindgi", author: "shubham", id: 1, age: 25 },
  { title: "hm hai rahi pyar ke", author: "sushil", id: 2, age: 26 },
  { title: "jo jita vhi sikandar", author: "pratik", id: 3, age: 27 },
  { title: "Moment of the day", author: "naresh", id: 4, age: 28 },
  { title: "tuta hua khwab hu mai", author: "pratik", id: 5, age: 29 },
];

//1st approach
const value = object
  .filter((ele) => ele.age > 26)
  .filter((ele) => ele.author === "pratik");
console.log(value);

//2nd approach
const value2 = object.filter((ele) => ele.age > 26 && ele.author === "pratik");
console.log(value2);

const value3 = object.map((ele) => ele.age > 26 && ele.author === "pratik");
console.log(value3);
