const object = [
  { title: "A jindgi", author: "shubham", id: 1, age: 25 },
  { title: "hm hai rahi pyar ke", author: "sushil", id: 2, age: 26 },
  { title: "jo jita vhi sikandar", author: "pratik", id: 3, age: 27 },
  { title: "Moment of the day", author: "naresh", id: 4, age: 28 },
  { title: "tuta hua khwab hu mai", author: "vaibhav", id: 5, age: 29 },
];

//length of input and output array will always be same
//It will iterate for every element and return an  elements with new array
const array = [1, 2, 3, 4, 5];
const newArray = array.map((element) => element * 2);
console.log(newArray);

const Authors = object.map((ele) => ele.author);
console.log(Authors);

//1st approach
const newObject = object.map((ele) => {
  return { author: ele.author, title: ele.title };
});
console.log(newObject);

const getNewId = (ele) => {
  return ele.id + 100;
};

//2nd approach,In this no need to use curly brace with return keyword
const newObject2 = object.map((ele) => ({
  author: ele.author,
  title: ele.title,
  newId: getNewId(ele),
}));
console.log(newObject2);

//Here for such type of conditions it will return array of boolean values
const booleanValues = object.map((ele) => ele.age === 26);
console.log(booleanValues);
