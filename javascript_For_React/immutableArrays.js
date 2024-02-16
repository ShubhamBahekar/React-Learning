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

//Add an new object in an array of objects
const addObject = {
  author: "Shubh",
  id: 19,
  age: 29,
  favSports: ["hockey"],
};

//Add an object in an array of objects
const objectAfterAdd = [...object, addObject];
console.log(objectAfterAdd);

//Delete an object in an array of objects
const objectAfterDelete = objectAfterAdd.filter((obj) => obj.id !== 2);
console.log(objectAfterDelete);

//Update an object
const objectAfterUpdate = objectAfterDelete.map((obj) => {
  return obj.id === 3 ? { ...obj, author: "Raju" } : obj;
});
console.log(objectAfterUpdate);
