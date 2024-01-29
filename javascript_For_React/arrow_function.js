let object = { Myname: "Shubham", date: "2012-02-31", age: 26 };
const { Myname, date, age } = object;

//normal function
function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(date));

//arrow function
//for single line code no need of opening and closing curly braces with return keyword
//if we add curly brace to singe line statement still require return keyword
// if we add return keyword to any statement then wrap this statement into curly braces
const getNewYear = (str) => str.split("-")[0];
console.log(getNewYear(date));

//arrow function with return keyword
const newYear = (str) => {
  return str.split("-")[0];
};
console.log(newYear(date));
