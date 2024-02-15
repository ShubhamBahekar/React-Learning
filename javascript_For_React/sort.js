const object = [
  {
    title: "A jindgi",
    author: "shubham",
    id: 6,
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
    id: 4,
    age: 27,
    isAvailable: true,
    favSports: ["football", "cricket"],
  },
  {
    title: "Moment of the day",
    author: "naresh",
    id: 1,
    age: 28,
    favSports: ["running", "hockey"],
  },
  {
    title: "tuta hua khwab hu mai",
    author: "pratik",
    id: 3,
    age: 29,
    favSports: ["football", "hockey"],
  },
];

//sort method modifies the original array
const array = [2, 3, 5, 1, 8, 6, 3, 4, 7];
// const newArray = array.sort((a, b) => a - b);
// console.log(array);
// console.log(newArray);

//To avoid this we will use either slice() or spread operator
//It will  copy values of original array and store in new array
const newArray2 = [...array].sort((a, b) => a - b);
console.log(array);
console.log(newArray2);

const newArray3 = array.slice().sort((a, b) => a - b);
console.log(array);
console.log(newArray3);

// Ascending order [a-b]
const sort_Ascending_Age = [...object].sort((a, b) => a.id - b.id);
console.log(sort_Ascending_Age);

//Descending order [b-a]
const sort_Descending_Age = object.slice().sort((a, b) => b.age - a.age);
console.log(sort_Descending_Age);
