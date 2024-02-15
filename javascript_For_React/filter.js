const object = [
  {
    title: "A jindgi",
    author: "shubham",
    id: 1,
    age: 25,
    favSports: ["football", "hockey"],
  },
  {
    title: "hm hai rahi pyar ke",
    author: "sushil",
    id: 2,
    age: 26,
    isAvailable: false,
    favSports: ["cricket", "hockey"],
  },
  {
    title: "jo jita vhi sikandar",
    author: "pratik",
    id: 3,
    age: 27,
    isAvailable: true,
    favSports: ["football", "cricket"],
  },
  {
    title: "Moment of the day",
    author: "naresh",
    id: 4,
    age: 28,
    favSports: ["running", "hockey"],
  },
  {
    title: "tuta hua khwab hu mai",
    author: "pratik",
    id: 5,
    age: 29,
    favSports: ["football", "hockey"],
  },
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

//In object/array  we  set a condition to filter values/objects which includes that values
const val = object.filter((ele) => ele.favSports.includes("cricket"));
console.log(val);

const val2 = object
  .filter((ele) => ele.favSports.includes("cricket"))
  .map((ele) => ele.author);
console.log(val2);
