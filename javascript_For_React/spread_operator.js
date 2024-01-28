const array = ["Shubham", "Rahul", "Pratik", "Naresh"];

//It will add complete array structure
const Newarray = [array, "Sushil"];
console.log(Newarray);

//to add new name/value in an array
const newArrayValue = [...array, "Mahesh", "Suresh"];
console.log("To Add NewArrayValue=>", newArrayValue);

//spread operator should be at last in array destructuring
const [FirstName, SecondName, ...otherNames] = array;
console.log("TotalArr=>", otherNames);

let object = { Myname: "Shubham", date: "2012-02-31", age: 26 };

// It will add new object structure directly and Myname is not updating
const obj2 = { object, Myname: "Pratik" };
console.log(obj2);

// it will add new object values directly and Myname is  updated
const obj3 = { ...object, Myname: "Pratik" };
console.log(obj3);

//spread operator should be at 1st place otherwise before that all key values not going to update
const obj4 = { Myname: "Ganesh", ...object, age: 20 };
console.log(obj4);
