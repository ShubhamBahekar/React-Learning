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

//It reduce the array into single value
const totalAge = object.reduce((acc, obj) => acc + obj.age, 0);
console.log(totalAge);
