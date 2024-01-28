const array = ["Shubham", "Rahul", "Pratik", "Naresh"];

//It will add complete array structure
const Newarray = [array, "Sushil"];
console.log(Newarray);

//It wii add array values
const Newarr = [...array, "Sushil"];
console.log(Newarr);

let obj = { Myname: "Shubham", date: "2012-02-31", age: 26 };
console.log(obj);

// It will add new object structure directly
const obj2 = { obj, Myname: "Pratik" };
console.log(obj2);

// it will add new object values directly
const obj3 = { ...obj, Myname: "Pratik" };
console.log(obj3);

//spread operator should be at 1st place otherwise before that all keys not going to update
const obj4 = { Myname: "Ganesh", ...obj, age: 20 };
console.log(obj4);
